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