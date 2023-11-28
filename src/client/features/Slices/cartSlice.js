import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      //product object for use in price calculation and cart cards
      const { product } = action.payload;
      state.cartItems.push(product);
      state.totalPrice += product.price;
    },
    removeFromCart: (state, action) => {
      const { product } = action.payload;
      const cartIndex = state.cartItems.findIndex(product);
      state.cartItems.splice(cartIndex, 1);
      state.totalPrice -= product.price;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
