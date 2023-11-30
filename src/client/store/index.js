import { configureStore } from "@reduxjs/toolkit";
import api from "./api";
import cartSlice from "../features/Slices/cartSlice";

const store = configureStore({
  reducer: {
  [api.reducerPath]: api.reducer,
    // auth: authReducer,
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
