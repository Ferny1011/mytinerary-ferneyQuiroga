import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const get_cities = createAsyncThunk('get_cities', async () => {
    try {
        const response = await axios.get(`${API_URL}/cities?name=`);
        return {
            cities: response.data.cities
        }
    }
    catch (error) {
        console.log(error);
    }
});

export const filter_cities = createAsyncThunk('filter_cities', async (obj) => {
    try {
        const response = await axios.get(`${API_URL}/cities?name=${obj.name}`);
        return {
            cities: response.data.cities
        }
    }
    catch (error) {
        return {
            cities: []
        }
    }
});
