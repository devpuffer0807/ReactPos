import React, { Component } from "react";
import { clickDay } from "../../app/action/desktop";
import { connect } from "react-redux";

class ItemDay extends Component {
    render(){
        return(
            <div className={`callendar-item day  ${this.props.currentDay}`} onClick={()=>{
                dispatch(clickDay(this.props.d))
            }}>
              {this.props.d}
            </div>
        )
    }
}

const _mapStateToProps = (state) => {
    return state;
}

const _mapDispatchToProps = {
    clickDay,
};

export default connect(_mapStateToProps, _mapDispatchToProps)(ItemDay);