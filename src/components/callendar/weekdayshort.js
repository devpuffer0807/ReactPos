import React, { Component } from "react";
import "./styles/weekdayshort.css";
import moment from "moment";
let weekdayshort = moment.weekdaysShort();
// weekdayshort = ["NO."].concat(weekdayshort);

class WeekDayShort extends Component {
    render(){
        return(
            <div className={"callendar-row"}>
                {
                    weekdayshort.map(day => {
                        return (
                            <div key={day} className="callendar-weekday-item weekdaysort">
                                {day}
                            </div>
                        );
                    })
                }
            </div>
        )
    }
}

export default WeekDayShort;