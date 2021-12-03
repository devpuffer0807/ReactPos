import { combineReducers } from "redux";
import ReminderReducer from "./reminder";
import DesktopReducer from "./desktop";

export default combineReducers({
    reminder: ReminderReducer,
    desktop: DesktopReducer,
});
