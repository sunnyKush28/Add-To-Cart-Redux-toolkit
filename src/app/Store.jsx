import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productsSlice.js";
import cartReducer from "../features/cart/cartSlices.js";

export const Store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});
