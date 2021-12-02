import { DESKTOP_SELECT_ID } from "../../action/type";

const initialState = {
    selectDay: null,
};
export default (state = initialState, action) =>{
    debugger;
    if(action.type === DESKTOP_SELECT_ID)
        return { ...state, selectDay: action.day }
    return state;
}