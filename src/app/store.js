/**
 *  @author Puffer
 *  @created at 12/03 2021
 *  @updated at 12/04 2021
 * 
 * **/

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./reducer";

export const store = configureStore({
  reducer: {
    store: rootReducer,
  },
});
