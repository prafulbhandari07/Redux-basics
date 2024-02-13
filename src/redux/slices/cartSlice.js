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
        (item) => item.product.id === action.payload.id
      );

      if (productExists) {
        productExists.quantity++;
        state.totalPrice += productExists.product.price;
        return;
      }

      const product = {
        product: action.payload,
        quantity: 1,
      };
      state.totalPrice += action.payload.price;
      state.products.push(product);
    },
    existInCart: (state, action) => {
      console.log(state.products);
      const productExists = state.products.find(
        (product) => product.product.id === action.payload
      );

      if (productExists) {
        return true;
      }
      return false;
    },
    removeFromCart: (state, action) => {
      const productExists = state.products.find(
        (product) => product.product.id === action.payload
      );
      if (productExists) {
        const productPrice = productExists.product.price;
        const productQuantity = productExists.quantity;
        state.totalPrice -= productPrice * productQuantity;
      }
      const filteredItems = state.products.filter((product) => {
        return product.product.id !== action.payload;
      });
      state.products = filteredItems;
    },
  },
});

export const { addToCart, removeFromCart, existInCart } = cartSlice.actions;

export default cartSlice.reducer;
