import { createReducer } from "@reduxjs/toolkit";
import { userLoggedIn } from "../actions/userActions";

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
);

export default userReducer;