/**
 *  @author Puffer
 *  @created at 12/03 2021
 *  @updated at 12/04 2021
 * 
 * **/

import React from "react";
import "./css/LeftLayout.css";
import { connect } from "react-redux";
import LeftItem from './LeftItem';

const LeftLayout = ({ pos }) => {
    return (
        <div className="leftlayout-container">
            {
                pos.left.data.map((item)=>{
                    return (<LeftItem data={item} key={item._id}/>)
                })
            }
        </div>
    )
}

const _mapStateToProps = (state) =>({
    pos: state.store.pos,
});


const _mapDispatchToProps = {
    
}
export default connect(_mapStateToProps,_mapDispatchToProps)(LeftLayout);