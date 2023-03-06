import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      let product = state.find((product) => product.id === action.payload.id);
      if (product) {
        product.quantity++;
      } else {
        let clone = { ...action.payload, quantity: 1 };
        state.push(clone);
      }
    },
    deleteFromCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    clearAll: (state, action) => {
      return [];
    },

    decreaseQuantity: (state, action) => {
      let product = state.find((product) => product.id === action.payload.id);
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
