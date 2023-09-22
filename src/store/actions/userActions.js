import { createAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from 'sweetalert2'

export const userLoggedIn = createAsyncThunk("userLoggedIn", async (obj) => {
    try {
        const { data } = await axios.post('http://localhost:3000/api/auth/signin', obj.data);
        localStorage.setItem('token', data.response.token)
        localStorage.setItem('user', JSON.stringify(data.response.user))
        Swal.fire({
            title: 'Welcome!',
            text: data.message,
            icon: 'success',
            confirmButtonText: 'OK'
        })
        return {
            user: data.response.user,
            token: data.response.token
        }
    } catch (error) {
        console.log(error);
        Swal.fire({
            title: 'Error!',
            text: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'Cool'
        })
        return {
            user: null
        }

    }
});


export const userSignUp = createAsyncThunk("userSignUp", async (obj) => {
    try {
        await axios.post('http://localhost:3000/api/auth/signup', obj.data);
        let userCredencials = {
            email: obj.data.email,
            password: obj.data.password
        }
        const { data } = await axios.post('http://localhost:3000/api/auth/signin', userCredencials);
        localStorage.setItem('token', data.response.token)
        localStorage.setItem('user', JSON.stringify(data.response.user))
        Swal.fire({
            title: 'Welcome!',
            text: data.message,
            icon: 'success',
            confirmButtonText: 'OK'
        })
        return {
            user: data.response.user,
            token: data.response.token
        }
    } catch (error) {
        console.log(error);
        Swal.fire({
            title: 'Error!',
            text: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'Cool'
        })
        return {
            user: null
        }
    }
});

export const userLoggedInGoogle = createAsyncThunk("userLoggedInGoogle", async (obj) => {
    try {
        localStorage.setItem('token', obj.token)
        localStorage.setItem('user', JSON.stringify(obj.user))
        return {
            user: obj.user,
            token: obj.token
        }
    } catch (error) {
        console.log(error);
        return {
            user: null
        }
    }
});

export const userLoggedOut = createAsyncThunk("userLoggedOut", async () => {
    const token = localStorage.getItem('token')
    const headers = {
        'Authorization': `Bearer ${token}`
    }
    try {
        const { data } = await axios.post('http://localhost:3000/api/auth/signout', {}, { headers });
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        Swal.fire({
            title: 'Goodbye!',
            text: data.message,
            icon: 'success',
            confirmButtonText: 'OK'
        })
        return {
            user: null,
            token: null
        }
    } catch (error) {
        console.log(error);
    }
});


export const user_token = createAction("user_token", (user) => {
    return {
        payload: {
            user
        }
    }
});






