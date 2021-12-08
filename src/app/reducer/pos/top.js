/**
 *  @author Puffer
 *  @created at 12/03 2021
 *  @updated at 12/04 2021
 * 
 * **/

import { POS_BUTTON_CLICK, POS_INPUT_METHOD, POS_UPDATE_COMMENT, POS_UPDATE_TOP_DATA } from "../../action/type";

const initialState = {
    price: 0,
    quantity: '',
    quantity_unit: '',
    comment: '',
    number: 0,
    input_method: POS_INPUT_METHOD
};

const handle = (state = initialState, action) => {

    if(action.type === POS_UPDATE_TOP_DATA){
        return action.payload;
    }

    if(action.type === POS_UPDATE_COMMENT){
        return { ...state, comment: action.payload }
    }

    if (action.type === POS_BUTTON_CLICK) {
        if(action.payload === "format"){
            return {
                ...state,
                comment: '',
                number: 0,
            }
        }
        if (Number.isInteger(parseInt(action.payload))) {
            return {
                ...state,
                comment: '',
                number: state.number !== 0 ? (state.number.toString() + action.payload.toString()) : action.payload
            };
        }
        else if (action.payload === 'x' || action.payload === 'kg') {
            if( state.number !== 0)
                return { ...state, comment: '', number: 0, quantity: state.number, quantity_unit: action.payload }
        }else if(action.payload === 'del'){
            if(state.number.toString().length < 2)
                return { ...state, comment: '',number: 0 }
            else
                return { ...state, 
                    comment: '',
                    number: state.number.toString().indexOf('.') === -1 ? state.number.toString().substr(0, state.number.toString().length-1) 
                                :(state.number.toString().indexOf('.') === (state.number.toString().length-2) ? Math.floor(state.number) : parseFloat(state.number.toString().substr(0, state.number.toString().length-1)))
                }
        }else if(action.payload === "."){
            return {...state, comment: '', number: state.number.toString().indexOf('.') !== -1 ? state.number : (state.number + action.payload)}
        }
    }
    return state;
}

export default handle;