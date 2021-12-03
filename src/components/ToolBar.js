import React from "react";
import "./css/ToolBar.css";
import Button from "./Button";
import ButtonList from "../config/ButtonList";
import { connect } from "react-redux";

const ToolBar = () => {
    return (
        <div className={"toolbar-container"}>
            {
                ButtonList.map((item, index) => {
                    return (
                        <div className="buttoncol-container" key={"buttoncol_" + index}>
                            {
                                (typeof item.col[1][1] === 'object') ?
                                    ((typeof item.col[1][1].table === 'object') ?
                                        item.col[1][1].table.map((buttonData, buttonDataIndex) => {
                                            console.log("======", buttonData.caption);
                                            return (<Button caption={buttonData.caption} color={buttonData.color} backgroundColor={buttonData.backgroundcolor}  component={<span>{buttonData.caption}</span>} key={"button_" + index + "_" + buttonDataIndex} />)
                                        })
                                        : null)
                                    : null
                            }
                            {
                                (typeof item.col[1] === 'object') ?
                                    ((typeof item.col[1].table === 'object') ?
                                        item.col[1].table.map((buttonData, buttonDataIndex) => {
                                            console.log("======", buttonData.caption);
                                            return (<Button caption={buttonData.caption} component={<span>{buttonData.caption}</span>} color={buttonData.color} backgroundColor={buttonData.backgroundcolor} key={"button_" + index + "_" + buttonDataIndex} />)
                                        })
                                        : null)
                                    : null
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

const _mapStateToProps = (state) =>({
    
});


const _mapDispatchToProps = {
    
}
export default connect(_mapStateToProps,_mapDispatchToProps)(ToolBar);