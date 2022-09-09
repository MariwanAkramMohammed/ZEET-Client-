import { createSlice } from "@reduxjs/toolkit";
const CartSlice = createSlice({
  name: "cart",
  initialState: {
    Cartproducts: [],
    AllPrices: 0,
  },
  reducers: {
    AddItemToCart: (state, action) => {
      const ItemExist = state.Cartproducts.find(
        (item) => item.name === action.payload.name
      );
      if (ItemExist) {
        state.Cartproducts.forEach(
          (product, index, arr) =>
            product.name === action.payload.name &&
            (arr[index] = {
              ...product,
              quantity: product.quantity + action.payload.quantity,
              Totalprice: product.Totalprice + action.payload.Totalprice,
            })
        );
      } else {
        state.Cartproducts.push(action.payload);
      }
      state.AllPrices += action.payload.Totalprice;
    },
    RemoveItemCart: (state, action) => {
      state.Cartproducts = state.Cartproducts.filter(
        (item) => item.name !== action.payload.name
      );

      state.AllPrices -= action.payload.Totalprice;
    },
    EmptyCartProducts: (state) => {
      state.Cartproducts = [];
      state.AllPrices = 0;
    },
  },
});
export const { AddItemToCart, RemoveItemCart ,EmptyCartProducts} = CartSlice.actions;
export default CartSlice.reducer;
