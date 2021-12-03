import React from "react";
import "./css/TopBar.css";
import { connect } from "react-redux";

const TopBar = ()=> {
    return (
        <div className={"topbar-container"}>
            <div>Price Summary:</div>
            <div>Quantity and Weight:</div>
            <div>Comments and Error:</div>
            <div>Number:</div>
        </div>
    )
}
const _mapStateToProps = (state) =>({
    
});


const _mapDispatchToProps = {
    
}
export default connect(_mapStateToProps,_mapDispatchToProps)(TopBar);