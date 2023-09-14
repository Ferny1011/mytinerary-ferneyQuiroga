import { createReducer } from "@reduxjs/toolkit";
import { userLoggedIn, user_token } from "../actions/userActions";

const initialState = {
    user: null,
    token: null
};

const userReducer = createReducer(initialState,
    (builder) => builder
        .addCase(userLoggedIn.fulfilled, (state, action) => {
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            };
        }
        )
        .addCase(user_token, (state, action) => {
            return {
                ...state,
                user: action.payload.user
            };
        })
);

export default userReducer;