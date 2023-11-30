import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  totalReceived: 0,
  calculatedChange: {},
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      //product object for use in price calculation and cart cards
      const product = action.payload;

      // Check if the product is a duplicate of an item already in the cart
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.productId === product.id
      );
      // If product already exists in the cart update quantity and total price
      if (existingCartItem) {
        existingCartItem.quantity++;
        console.log(
          `${existingCartItem.name} quantity updated to ${existingCartItem.quantity}`
        );
        state.totalPrice += product.price;
      } else {
        // If product not already in cart, add to cart and give quantity of 1
        state.cartItems.push({ ...product, quantity: 1 });
        console.log("product", product);
        state.totalPrice += product.price;
      }
    },
    removeFromCart: (state, action) => {
      const product = action.payload;
      const cartIndex = state.cartItems.indexOf(
        (cartItem) => cartItem.id === product.id
      );
      state.cartItems.splice(cartIndex, 1);
      state.totalPrice -= product.price;
    },
    addTotalReceived: (state, action) => {
      const { value } = action.payload;
      state.totalReceived += value;
    },
    addCalculatedChange: (state, action) => {
      const { changeObject } = action.payload;
      state.calculatedChange = changeObject;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addTotalReceived,
  addCalculatedChange,
} = cartSlice.actions;

export default cartSlice.reducer;
