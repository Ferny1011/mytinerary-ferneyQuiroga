import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/userReducers";
import cityReducer from "./reducer/cityReducers";
export const store = configureStore({
    reducer: {
        userReducer: userReducer,
        cityReducer: cityReducer
    }
});