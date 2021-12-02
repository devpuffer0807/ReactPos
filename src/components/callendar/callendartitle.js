import React, { Component } from "react";
import moment from "moment";

class CallendarTitle extends Component {
    state = {
        dateObject: moment(),
    }

    render(){
        return(
            <div className={"callendar-title"}>
                <img src='/images/calendar-icon.png'/>
                <h3>{moment().subtract(1, "month").startOf("month").format('MMMM')}</h3>
                <h2>{moment().format('YYYY')}</h2>
            </div>
        )
    }
}

export default CallendarTitle;