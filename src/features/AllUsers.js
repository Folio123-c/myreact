import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// thunk for fetching data from the API
export const getAllUsers = createAsyncThunk(
    '/api/v1/user/profile/users',
    async (page,{rejectWithValue}) => {
        try {
            const authToken = localStorage.getItem('token');
            // const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg0MDYwZWYwLTQwMjgtNDk4MC05MDlkLWZkZjdiZDdmN2YwZiIsImVtYWlsIjoic2hlbWFqb2xpdmV0QGdtYWlsLmNvbSIsInJvbGVJZCI6MSwiaWF0IjoxNjg0ODc1NjMzLCJleHAiOjE3MTY0MzMyMzN9.goaUFTW_kobHkUs2S8h_seLY9RoOOCMaHuJf4-KHUvU';

            const config = {
                headers: {
                    'Authorization': "Bearer "+ authToken
                }
            };

            const response = await axios.get(`https://ecommerce-tech-titans.herokuapp.com/api/v1/user/profile/users?page=${page}`, config);
            console.log('response data:', response.data);
            return response.data;
        } catch (error) {
            console.log('Create product error:', error.response.data.message);

            return rejectWithValue(error.response.data.message);
            // throw error;
        }
    }
);






//  slice for the product
const AlluserSlice = createSlice({
    name: 'allusers',
    initialState: {
        allusers: null,
        status: null,
        error: null,
        currentPage: 1, // Initialize currentPage to 0
        totalPages: 0,
    },
    extraReducers: {

        [getAllUsers.pending]: (state) => {
            state.status = 'loading.....';
        }
        ,
        [getAllUsers.fulfilled]: (state, action) => {
            state.allusers = action.payload;
            state.status = 'success';

        },
        [getAllUsers.rejected]: (state, action) => {
            state.error =action.payload ;
            state.status = 'failed';
        }
    }
});

export default AlluserSlice.reducer;