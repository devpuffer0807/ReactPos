/**
 *  @author Puffer
 *  @created at 12/03 2021
 *  @updated at 12/04 2021
 * 
 * **/

import { POS_BUTTON_CLICK, POS_UPDATE_COMMENT, POS_UPDATE_LEFT, POS_UPDATE_TOP_DATA } from "./type";

export const updateTopData = (obj) => {
    return{
        type: POS_UPDATE_TOP_DATA,
        payload: obj,
    }
}

export const buttonClick = (caption) => {
    return {
        type: POS_BUTTON_CLICK,
        payload: caption,
    }
}

export const updateComment = (msg) => {
    return {
        type: POS_UPDATE_COMMENT,
        payload: msg,
    }
}

export const updateLeft = (obj) => {
    return {
        type: POS_UPDATE_LEFT,
        payload: obj
    }
}