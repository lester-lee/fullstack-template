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
        (cartItem) => cartItem.id === product.id
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
        state.totalPrice += product.price;
        console.log(product.name, "added to cart");
      }
    },
    removeFromCart: (state, action) => {
      //product object for use in price calculation and cart cards
      const product = action.payload;

      // Look for product in cart
      const cartIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === product.id
      );
      const cartItem = state.cartItems[cartIndex];

      // If product exists in the cart and there are more than one, reduce quanitiy
      if (cartIndex !== -1) {
        if (cartItem.quantity > 1) {
          cartItem.quantity--;
          console.log(
            `${cartItem.name} quantity updated to ${cartItem.quantity}`
          );
          state.totalPrice -= product.price;
          console.log(cartItem.name, "quantity updated");
        } else {
          // If there is only one of the product in cart, remove from cart
          state.cartItems.splice(cartIndex, 1);
          console.log(
            `${product.price} deducted from total of ${state.totalPrice} for ${product.name}`
          );
          state.totalPrice -= product.price;
        }
      } else {
        console.log("cannot remove, item not found in cart");
      }
    },
    addTotalReceived: (state, action) => {
      const { value } = action.payload;
      state.totalReceived += value;
    },
    subtractTotalReceived: (state, action) => {
      const { value } = action.payload;
      state.totalReceived -= value;
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
  subtractTotalReceived,
  addCalculatedChange,
} = cartSlice.actions;

export default cartSlice.reducer;
