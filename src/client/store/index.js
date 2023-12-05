import { configureStore } from "@reduxjs/toolkit";
import api from "./api";
import cartSlice from "../features/CashRegister/cartSlice";

const store = configureStore({
  reducer: {
  [api.reducerPath]: api.reducer,
  cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
