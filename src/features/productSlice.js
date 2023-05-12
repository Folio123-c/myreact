

import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// thunk for fetching data from the API
export const createProduct=createAsyncThunk(
    '/api/v1/product/create',
    async (product) => {
        try {
            const response = await axios.post(`https://ecommerce-tech-titans.herokuapp.com/api/v1/product/create`,product);
            console.log('response data:', response.data);
            return response.data;

        } catch (error) {
            console.log('login error:', error.message);
            throw error;
        }
    }
);
export const createCategory=createAsyncThunk(
    'api/v1/category/create',
    async (user) => {
        try {
            const response = await axios.post(`https://ecommerce-tech-titans.herokuapp.com/api/v1/category/create`,user);
            console.log('response data:', response.data);
            return response.data;

        } catch (error) {
            console.log('login error:', error.message);
            throw error;
        }
    }
);

// Create a slice for the user
const ProductSlice = createSlice({
    name: 'product',
    initialState: {
        product: [],
        status: null,
        Error: null
    },
    extraReducers: {

        [createProduct.pending]: (state) => {
            state.status = 'loading.....';
        }
        ,
        [createProduct.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.status = 'success';
        },
        [createCategory.pending]: (state, action) => {
            state.status = 'loading.......';
        }
        ,
        [createCategory.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.status = 'success';
        }
    }
});

export default ProductSlice.reducer;