import { configureStore } from "@reduxjs/toolkit";
import api from "./api";
import cartSlice from "../features/CashRegister/cartSlice";
import authSlice from "../features/UserAccounts/authSlice";

// Configures store with reducers from API, CART and AUTH
const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    cart: cartSlice,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
