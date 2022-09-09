import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "products",
  initialState: {
    Products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    FetchingStart: (state) => {
      state.isFetching = true;
    },
    FetchingSuccess: (state, action) => {
      state.isFetching = false;
      state.Products = action.payload;
    },
    FetchingError: (state) => {
      state.error = true;
    },
  },
});

export const { FetchingStart, FetchingSuccess, FetchingError } =
  ProductSlice.actions;
export default ProductSlice.reducer;
