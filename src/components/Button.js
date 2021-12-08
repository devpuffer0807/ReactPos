/**
 *  @author Puffer
 *  @created at 12/03 2021
 *  @updated at 12/04 2021
 * 
 * **/

import React from "react";
import "./css/Button.css";
import { connect, useDispatch } from "react-redux";
import { buttonClick } from "../app/action/pos";
import { getProductByRefernce } from "../api/pos_api";
import { updateComment, updateLeft, updateTopData } from "../app/action/pos";
import { reference_valid_error, reference_id_error, input_unit_error, input_unit_select_error } from "../config/commnent_string";

const Button = ({ component, caption, color, backgroundColor, pos }) => {
    const dispatch = useDispatch();
    const getProduct = (num) => {
        if (pos.left.key.indexOf(num) === -1 && pos.top.quantity !== 0) {
            if (pos.top.quantity_unit === "kg" || pos.top.quantity_unit === "x") {
                getProductByRefernce(num)
                    .then(async (res) => {
                        if (res.payload !== null) {
                            if(!((res.payload.weightProduct === "1" && pos.top.quantity_unit === "kg") || (res.payload.weightProduct !== "1" && pos.top.quantity_unit === "x"))){
                                return dispatch(updateComment(input_unit_select_error + "  unit: " + (res.payload.weightProduct === "1" ? 'kg' : 'x')))
                            }
                            let temp = JSON.parse(JSON.stringify(pos.left));
                            res.payload.weightProduct = pos.top.quantity + pos.top.quantity_unit;
                            res.payload.price = Array.isArray(res.payload.price) ? (res.payload.price[0] === undefined ? 0 : res.payload.price[0]) : 0;
                            res.payload.price = res.payload.price * pos.top.quantity;
                            temp.data.push(res.payload);
                            temp.key.push(num);
                            dispatch(buttonClick("format"))
                            await dispatch(updateComment(""));
                            await dispatch(updateLeft(temp));

                            let topData = JSON.parse(JSON.stringify(pos.top));
                            topData.quantity = '';
                            topData.quantity_unit = '';
                            topData.number = 0;
                            topData.price = topData.price + res.payload.price;
                            dispatch(updateTopData(topData));
                        } else {
                            await dispatch(updateComment(reference_id_error));
                        }
                    })
            }else{
                return dispatch(updateComment(input_unit_error));
            }
        }
    }
    const buttonHandle = (caption) => {
        if (caption === 'a') {
            return getProduct(11);
        }
        if (caption === 'b') {
            return getProduct(22);
        }
        if (caption === 'c') {
            return getProduct(33);
        }
        if (caption === 'd') {
            return getProduct(44);
        }
        if (caption === 'bag') {
            return getProduct(55);
        }
        if (caption === 'enter') {
            if (pos.top.number.toString().indexOf('.') !== -1) {
                return dispatch(updateComment(reference_valid_error));
            }
            if ((pos.top.number === 0 || pos.top.number !== '' || pos.top.number !== '0') && pos.left.key.indexOf(pos.top.number) === -1) {
                return getProduct(pos.top.number);
            }
        } else {
            return dispatch(buttonClick(caption));
        }
    }
    return (
        <div className={caption === 'enter' ? "button-enter-container" : "button-container"} style={{ color: color, backgroundColor: backgroundColor }}
            onClick={() => {
                buttonHandle(caption)
            }}
        >
            {component}
        </div>
    )
}

const _mapStateToProps = (state) => ({
    pos: state.store.pos,
});


const _mapDispatchToProps = {
    buttonClick
}
export default connect(_mapStateToProps, _mapDispatchToProps)(Button);