import { DESKTOP_SELECT_ID } from "./type";

// export const clickDay = (day)  => {
//     debugger;
//     return dispatch({
//         type: DESKTOP_SELECT_ID,
//         day: day,
//     });
// }

export const clickDay = (day) => {
    // debugger;
    return {
        type: DESKTOP_SELECT_ID,
        day: day,
    };
  };