import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginSlice';
import productReducer from './productSlice';

const store = configureStore({
    reducer: {
        user: loginReducer,
        product: productReducer,
    },
});

export default store;
