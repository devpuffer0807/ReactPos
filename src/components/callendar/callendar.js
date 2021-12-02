import React, { Component } from "react";
import WeekDayShort from "./weekdayshort";
import CallendarBody from "./callendarbody";
import CallendarTitle from "./callendartitle";
import "./styles/style.css";

class Callendar extends Component {

    render(){
        return(
            <div  className={'callendar-container'}>
                <CallendarTitle/>
                <WeekDayShort/>
                <CallendarBody/>
            </div>
        )
    }
}

export default Callendar;