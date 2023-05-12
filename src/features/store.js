import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginSlice';
import productReducer from './productSlice';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import productsReducer from './SingleProduct';
import CategoryReducer from './CategorySlice';
import signupReducer from './SignupSlice';


const middlewares = [];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}


const store = configureStore({
    reducer: {
        user: loginReducer,
        product: productReducer,
        products: productsReducer,
        category: CategoryReducer,
        signup:signupReducer
    },
    middleware: [...middlewares, thunk],
});

export default store;