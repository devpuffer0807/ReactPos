/**
 *  @author Puffer
 *  @created at 12/03 2021
 *  @updated at 12/04 2021
 * 
 * **/

import { combineReducers } from "redux";
import TopReducer from "./top";
import LeftReducer from "./left";

export default combineReducers({
    top: TopReducer,
    left: LeftReducer,
});
