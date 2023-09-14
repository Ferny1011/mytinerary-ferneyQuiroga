import { createAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const userLoggedIn = createAsyncThunk("userLoggedIn", async (obj) => {
    try {
        const { data } = await axios.post('http://localhost:3000/api/auth/signin', obj.data);
        localStorage.setItem('token', data.response.token)
        localStorage.setItem('user', JSON.stringify(data.response.user))
        return {
            user: data.response.user,
            token: data.response.token
        }
    } catch (error) {
        console.log(error);
        return {
            user: null
        }
    }
});
export const user_token = createAction("user_token", (user) => {
    return{
        payload: {
            user
        }
    }
});






