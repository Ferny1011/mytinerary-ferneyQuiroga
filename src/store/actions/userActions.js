import { createAction } from "@reduxjs/toolkit";

export const userLoggedIn = createAction("userLoggedIn", (obj) => {
    return {
        payload: {
            logged: true,
            name: obj.name,
            photo: obj.photo
        }
    }
}
);

export const userLoggedOut = createAction("userLoggedOut", (obj) => {
    return {
        payload: {
            logged: false,
            name: obj.name,
            photo: obj.photo
        }
    }
}
);




