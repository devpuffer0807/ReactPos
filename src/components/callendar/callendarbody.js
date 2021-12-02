import React, { Component } from "react"
import moment from "moment"
import ItemEmpty from "./itemempty";
import ItemDay from "./itemday";

import "./styles/callendarbody.css";

class CallendarBody extends Component {
    
    state = {
        dateObject: moment(),
    }

    firstDayOfMonth = () => {
        let dateObject = this.state.dateObject;
        let firstDay = moment(dateObject)
                     .startOf("month")
                     .format("d"); 
       return firstDay;
    };

    daysInMonth = () => {
        let dateObject = this.state.dateObject;
        return moment(dateObject).daysInMonth();
    }

    currentDay = () => {  
        return this.state.dateObject.format("D");
   };

    render(){
        let blanks = [];
        for (let i = 0; i < this.firstDayOfMonth(); i++) {
            blanks.push(
                <ItemEmpty key={"empty"+i}/>
            );
        }

        let daysInMonth = [];
        for (let d = 1; d <= this.daysInMonth(); d++) {
            let currentDay = d == this.currentDay() ? "today" : "";
          daysInMonth.push(
            <ItemDay key={d} currentDay = {currentDay} d= {d}/>
          );
        }

        blanks.push(daysInMonth);

        return(
            <div className={'callendar-body'}>
                <div className={"callendar-body-row"}>
                    {blanks}
                </div>
            </div>
        )
    }
}

export default CallendarBody;