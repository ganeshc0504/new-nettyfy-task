import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './product-slice/ProductSlice'

const store = configureStore({
    reducer:{
        products:productReducer,
    },
})

export default store