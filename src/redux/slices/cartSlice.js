import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productExists = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (productExists) {
        return;
      }

      state.products.push(action.payload);
    },
    existInCart: (state, action) => {
      console.log(state.products);
      const productExists = state.products.find(
        (product) => product.id === action.payload
      );

      if (productExists) {
        return true;
      }
      return false;
    },
    removeFromCart: (state, action) => {
      const filteredItems = state.products.filter((product) => {
        return product.id !== action.payload;
      });
      state.products = filteredItems;
    },
  },
});

export const { addToCart, removeFromCart, existInCart } = cartSlice.actions;

export default cartSlice.reducer;
