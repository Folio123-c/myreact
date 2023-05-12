import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const Signup = createAsyncThunk(
    "/api/v1/user/signup",
    async (signup,{rejectWithValue}) => {
        try {
            const response = await axios.post('https://ecommerce-tech-titans.herokuapp.com/api/v1/user/signup',signup);
            console.log('Signup response', response.data)
            return response.data;

        } catch (error) {
            console.log('Signup error:', error.response.data.message);
            return rejectWithValue(error.response.data.message);

        }
    }
);

const SignupSlice = createSlice({
    name: "signup",
    initialState: {
        signup: null,
        status: null,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(Signup.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(Signup.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.signup = action.payload;
            })
            .addCase(Signup.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    },
});

export default SignupSlice.reducer;
