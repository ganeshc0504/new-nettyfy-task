import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name:"product",
    initialState:{
        products:[],
    },
    reducers:{
        addProducts:(state,{payload})=>{
            state.products = payload
        },
        createProduct:(state,{payload})=>{
            const id = state.products.length-1
            if(payload)state.products.push({id,payload}) 
        }
    },
})

export const {addProducts,createProduct} = productSlice.actions
export const selectProducts = (state)=>state.products.products

export default productSlice.reducer;

