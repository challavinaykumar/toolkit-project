import { configureStore } from "@reduxjs/toolkit";
import reducer from './Createslice';

export const store = configureStore({
    reducer:{
        cart: reducer,
    }
})