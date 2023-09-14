import { createAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const userLoggedIn = createAsyncThunk("userLoggedIn", async (obj) => {
    try {
        const { data } = await axios.post('http://localhost:3000/api/auth/signin', obj.data);
        localStorage.setItem('token', JSON.stringify(data.response.token))
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





