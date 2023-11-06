import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import api from "./api";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
