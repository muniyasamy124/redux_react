import {configureStore} from "@reduxjs/toolkit";
import customerReducer from './slice/userSlice'

export const store = configureStore({
    devTools:false,
    reducer:{
        customer:customerReducer
    }
})