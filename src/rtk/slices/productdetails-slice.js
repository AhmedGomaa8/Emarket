import { createSlice } from "@reduxjs/toolkit";

let productDetailsSlice = createSlice({
  initialState: {},
  name: "productDetailsSlice",
  reducers: {
    productToDetails: (state, action) => {
      return action.payload;
    },
  },
});

export let { productToDetails } = productDetailsSlice.actions;

export default productDetailsSlice.reducer;
