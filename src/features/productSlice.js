import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// thunk for fetching data from the API
export const createProduct = createAsyncThunk(
    '/api/v1/product/create',
    async (product,{rejectWithValue}) => {
        try {
            const authToken = localStorage.getItem('token');

            const config = {
                headers: {
                    'Authorization': "Bearer "+ authToken
                }
            };

            const response = await axios.post(`https://ecommerce-tech-titans.herokuapp.com/api/v1/product/create`, product, config);
            console.log('response data:', response.data);
            return response.data;
        } catch (error) {
            console.log('Create product error:', error.response.data.message);

            return rejectWithValue(error.response.data.message);
            // throw error;
        }
    }
);

export const createCategory=createAsyncThunk(
    'api/v1/category/create',
    async (product,{rejectWithValue}) => {
        try {
            const response = await axios.post(`https://ecommerce-tech-titans.herokuapp.com/api/v1/category/create`,product);
            console.log('response data:', response.data);
            return response.data;

        } catch (error) {
            console.log('login error:', error.response.data.message);
            return rejectWithValue(error.response.data.message);
            // throw error;
        }
    }
);

export const ViewProduct = createAsyncThunk(
    'api/v1/product',
    async (page, { rejectWithValue }) => {
        try {
            const response = await axios.get(`https://ecommerce-tech-titans.herokuapp.com/api/v1/product?page=${page}`);
            console.log('response data:', response.data);
            return response.data ;
        } catch (error) {
            console.log('product error:', error.response.data.message);
            return rejectWithValue(error.response.data.message);
        }
    }
);




//  slice for the product
const ProductSlice = createSlice({
    name: 'product',
    initialState: {
        product: null,
        status: null,
        error: null,
        currentPage: 1, // Initialize currentPage to 0
        totalPages: 0,
    },
    extraReducers: {

        [createProduct.pending]: (state) => {
            state.status = 'loading.....';
        }
        ,
        [createProduct.fulfilled]: (state, action) => {
            state.product = action.payload;
            state.status = 'success';

        },
        [createProduct.rejected]: (state, action) => {
            state.error =action.payload ;
            state.status = 'failed';
        },
        [createCategory.pending]: (state, action) => {
            state.status = 'loading.......';
        },
        [createCategory.fulfilled]: (state, action) => {
            state.product = action.payload;
            state.status = 'success';
        },
        [ViewProduct.pending]: (state, action) => {
            state.status = 'loading.......';
        }
        ,
        [ViewProduct.fulfilled]: (state, action) => {
            state.product = action.payload;
            state.status = 'success';
            state.currentPage = action.payload.currentPage; // Update currentPage from the response
            state.totalPages = action.payload.totalPages
            // state.totalPages = calculateTotalPages(action.payload.data);
        },
        [ViewProduct.rejected]: (state, action) => {
            state.product = action.payload;
            state.error = 'failed';
        }
    }
});

export default ProductSlice.reducer;