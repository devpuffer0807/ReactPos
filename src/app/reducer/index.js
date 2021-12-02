import { combineReducers } from "redux";
import CallendarReducer from "./callendar";

export default combineReducers({
    callendar: CallendarReducer,
});