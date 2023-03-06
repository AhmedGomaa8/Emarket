import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart-slice";
import productdetailsSlice from "./slices/productdetails-slice";
import productsSlice from "./slices/products-slice";

export let store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
    details: productdetailsSlice,
  },
});
