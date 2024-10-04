import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { useEffect } from "react";
      

// Define async thunk for fetching products
const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (category) => {
      
      let fetch_url = 'https://fakestoreapi.com/products';
    if (category !== null) {
      fetch_url = `https://fakestoreapi.com/products/category/${category}`;
    }
    
      const response = await fetch(fetch_url);
      const data = await response.json();
      
            return data;
    }
  );

const initialState = {
    items:[],
    status:'idle',
    error:null
}

const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
})

export const selectAllProduct = (state)=>state.products;

export default productSlice.reducer
export { fetchProducts };