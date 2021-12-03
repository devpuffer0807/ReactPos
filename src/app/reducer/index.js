import { combineReducers } from "redux";
import CalcReducer from "./calc";

export default combineReducers({
    calc: CalcReducer,
});