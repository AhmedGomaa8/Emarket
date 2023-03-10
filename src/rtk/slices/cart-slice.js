import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  cartArr: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

let cartSlice = createSlice({
  initialState,
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      let product = state.cartArr.find(
        (product) => product.id === action.payload.id
      );
      if (product) {
        product.quantity++;
      } else {
        let clone = { ...action.payload, quantity: 1 };
        state.cartArr.push(clone);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartArr));
    },
    deleteFromCart: (state, action) => {
      let cartItems = state.cartArr.filter(
        (product) => product.id !== action.payload.id
      );
      state.cartArr = cartItems;
      localStorage.setItem("cart", JSON.stringify(state.cartArr));
    },
    clearAll: (state, action) => {
      state.cartArr = [];
      localStorage.clear();
    },
    decreaseQuantity: (state, action) => {
      let product = state.cartArr.find(
        (product) => product.id === action.payload.id
      );
      if (product) {
        product.quantity--;
      }
    },
  },
});
export let {
  addToCart,
  deleteFromCart,
  clearAll,

  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
