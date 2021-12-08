import React from "react";
import "./css/LeftItem.css";

const LeftItem = ({ data }) => {
    return (
        <div className="leftitem-container">
            {
                Object.keys(data).map((item, index) => {
                    return (
                        (data[item] !== '' && !Array.isArray(data[item]) && item !="_id") ?
                            <div key={index}>{item} : {data[item]}</div>
                            : null
                    )
                })
            }
            <hr/>
        </div>
    )
}

export default LeftItem;