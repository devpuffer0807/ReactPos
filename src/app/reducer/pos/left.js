/**
 *  @author Puffer
 *  @created at 12/03 2021
 *  @updated at 12/04 2021
 * 
 * **/

import { POS_UPDATE_LEFT } from "../../action/type";

const initialState = {data:[], key: []};

const handle = (state = initialState, action) =>{
    if(action.type === POS_UPDATE_LEFT){
        return action.payload;
    }
    return state;
}

export default  handle;