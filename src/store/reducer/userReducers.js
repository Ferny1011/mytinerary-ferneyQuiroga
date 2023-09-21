import { createReducer } from "@reduxjs/toolkit";
import { userLoggedIn, userSignUp, user_token, userLoggedOut,userLoggedInGoogle} from "../actions/userActions";

const initialState = {
    user: null,
    token: null,
};

const userReducer = createReducer(initialState,
    (builder) => builder
        .addCase(userLoggedIn.fulfilled, (state, action) => {
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            };
        })
        .addCase(userLoggedInGoogle.fulfilled, (state, action) => {
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            };
        })
        .addCase(userLoggedOut.fulfilled, (state, action) => {
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            };
        })
        .addCase(user_token, (state, action) => {
            return {
                ...state,
                user: action.payload.user
            };
        })
        .addCase(userSignUp.fulfilled, (state, action) => {
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            };
        })
);

export default userReducer;