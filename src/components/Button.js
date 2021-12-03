import React from "react";
import "./css/Button.css";
import { connect } from "react-redux";

const Button = ({ component, caption, color, backgroundColor }) => {
    return(
        <div className={ caption === 'enter' ? "button-enter-container" : "button-container" } style={{color: color, backgroundColor: backgroundColor}}>
            { component }
        </div>
    )
}

const _mapStateToProps = (state) =>({
    
});


const _mapDispatchToProps = {
    
}
export default connect(_mapStateToProps,_mapDispatchToProps)(Button);