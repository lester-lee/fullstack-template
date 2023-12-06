import { configureStore } from "@reduxjs/toolkit";
import api from "./api";
import cartSlice from "../features/CashRegister/cartSlice";
import authSlice from "../features/UserAccounts/authSlice";

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
