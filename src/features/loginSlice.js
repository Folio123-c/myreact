

import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Create a thunk for fetching data from the API
export const login=createAsyncThunk(
    'api/v1/user/login',
    async (user) => {
        try {
            const response = await axios.post(`https://ecommerce-tech-titans.herokuapp.com/api/v1/user/login`,user);
            console.log('response data:', response.data);
            localStorage.setItem('email',response.data.user.email);
            // userdata=thisUser;
            return response.data;

        } catch (error) {
            console.log('login error:', error.message);
            throw error;
        }
    }
);
export const verify=createAsyncThunk(
    'api/v1/user/login/verifyotp',
    async (user) => {
        try {
            const response = await axios.post(`https://ecommerce-tech-titans.herokuapp.com/api/v1/user/login/verifyotp`,user);
            console.log('response data:', response.data);
            localStorage.setItem('token',response.data.token);
            // localStorage.setItem('user',userdata);
            return response.data;

        } catch (error) {
            console.log('login error:', error.message);
            throw error;
        }
    }
);

// Create a slice for the user
const loginSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        status: null,
        Error: null
    },
    extraReducers: {

        [login.pending]: (state) => {
            state.status = 'loading.....';
        }
        ,
        [login.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.status = 'success';
        },
        [verify.pending]: (state, action) => {
            state.status = 'loading.......';
        }
        ,
        [verify.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.status = 'success';
        }
    }
});

export default loginSlice.reducer;