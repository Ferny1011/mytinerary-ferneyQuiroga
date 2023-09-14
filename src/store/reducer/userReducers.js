import { createReducer } from "@reduxjs/toolkit";
import { userLoggedIn, userLoggedOut } from "../actions/userActions";

const initialState = {
    logged: false,
    name: "User",
    photo: "/public/userDefult.png"
};

const userReducer = createReducer(initialState,
    (builder) => builder
        .addCase(userLoggedIn, (state, action) => {
            return {
                ...state,
                logged: true,
                name: action.payload.name,
                photo: action.payload.photo
            };
        }
        )
        .addCase(userLoggedOut, (state, action) => {
            return {
                ...state,
                logged: false,
                name: "User",
                photo: "/public/userDefult.png"
            };
        }
        )
);

export default userReducer;