/**
 *  @author Puffer
 *  @created at 12/03 2021
 *  @updated at 12/04 2021
 * 
 * **/


import React from "react";
import "./css/RightLayout.css";
import { connect } from "react-redux";

const RightLayout = ({ children })=>{
    return(
        <div className={"rightlayout-container"}>
            {children}
        </div>
    )
}
const _mapStateToProps = (state) =>({
    
});


const _mapDispatchToProps = {
    
}
export default connect(_mapStateToProps,_mapDispatchToProps)(RightLayout);