import { createSlice } from "@reduxjs/toolkit";

/**
 * The initial state of the cart slice.
 * @typedef {Object} CartState
 * @property {number} totalPrice - The total price of all items in the cart.
 * @property {number} totalReceived - The total amount of money received from the customer.
 * @property {number} changeToGive - The amount of change to give to the customer.
 * @property {Object} calculatedChange - An object containing the breakdown of the change to be given.
 * @property {Array.<Object>} cartItems - An array of objects representing the items in the cart. Each object should have the following properties:
 *   * id: The unique identifier of the product.
 *   * name: The name of the product.
 *   * price: The price of the product.
 *   * quantity: The quantity of the product in the cart.
 */
const initialState = {
  totalPrice: 0,
  totalReceived: 0,
  changeToGive: 0,
  calculatedChange: {},
  cartItems: [],
};

/**
 * A slice of the Redux store that manages the state of the cart.
 * @typedef {Object} CartSlice
 * @property {string} name - The name of the slice.
 * @property {CartState} initialState - The initial state of the slice.
 * @property {Object.<string, Function>} reducers - An object containing the reducers for the slice.
 *   * addToCart: Adds a product to the cart.
 *   * removeFromCart: Removes a product from the cart.
 *   * addTotalReceived: Adds the amount of money received from the customer to the total.
 *   * subtractTotalReceived: Subtracts the amount of money refunded to the customer from the total.
 *   * addCalculatedChange: Adds the calculated change to the state.
 *   * setChangeToGive: Sets the amount of change to give to the customer.
 *   * resetCart: Resets the cart state to its initial state.
 */
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    /**
     * Adds a product to the cart. If the product already exists in the
     * cart, the quanity of the product will be increased appropriately.
     * @param {CartState} state - The current state of the cart.
     * @param {Object} action - The action object.
     * @param {Object} action.payload - The product to add to the cart.
     */
    addToCart: (state, action) => {
      const product = action.payload;

      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.id === product.id
      );

      if (existingCartItem) {
        existingCartItem.quantity++;
        console.log(
          `${existingCartItem.name} quantity updated to ${existingCartItem.quantity}`
        );
        state.totalPrice += product.price;
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
        state.totalPrice += product.price;
        console.log(product.name, "added to cart");
      }
    },
    /**
     * Removes a product from the cart. If there is more than one instance
     * of the product, the quantity will be decreased appropriately.
     * @param {CartState} state - The current state of the cart.
     * @param {Object} action - The action object.
     * @param {Object} action.payload - The product to remove from the cart.
     */
    removeFromCart: (state, action) => {
      const product = action.payload;

      const cartIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === product.id
      );
      const cartItem = state.cartItems[cartIndex];

      if (cartIndex !== -1) {
        if (cartItem.quantity > 1) {
          cartItem.quantity--;
          console.log(
            `${cartItem.name} quantity updated to ${cartItem.quantity}`
          );
          state.totalPrice -= product.price;
          console.log(cartItem.name, "quantity updated");
        } else {
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
      const value = action.payload;
      state.totalReceived += parseFloat(value);
    },
    subtractTotalReceived: (state, action) => {
      const value = action.payload;
      state.totalReceived -= parseFloat(value);
    },
    addCalculatedChange: (state, action) => {
      const { changeObject } = action.payload;
      state.calculatedChange = changeObject;
    },
    setChangeToGive: (state, action) => {
      state.changeToGive = action.payload;
    },
    resetCart: (state) => {
      state.totalPrice = 0;
      state.totalReceived = 0;
      state.calculatedChange = {};
      state.changeToGive = 0;
      state.cartItems = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addTotalReceived,
  subtractTotalReceived,
  addCalculatedChange,
  resetCart,
  setChangeToGive,
} = cartSlice.actions;

export default cartSlice.reducer;
