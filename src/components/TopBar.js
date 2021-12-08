/**
 *  @author Puffer
 *  @created at 12/03 2021
 *  @updated at 12/04 2021
 * 
 * **/

import React, {  } from "react";
import "./css/TopBar.css";
import { connect } from "react-redux";

const TopBar = ({ pos })=> {

    return (
        <div className={"topbar-container"}>
            <div className="topbar-data-info">Price Summary: { pos.top.price }</div>
            <div className="topbar-data-info">Quantity and Weight: { pos.top.quantity }{pos.top.quantity_unit}</div>
            <div className="topbar-data-info">Comments and Error: <span className="topbar-data-info-comment">{ pos.top.comment }</span></div>
            <div className="topbar-data-info">Number: { pos.top.number }</div>
        </div>
    )
}
const _mapStateToProps = (state) =>({
    pos: state.store.pos,
});


const _mapDispatchToProps = {
    
}
export default connect(_mapStateToProps,_mapDispatchToProps)(TopBar);