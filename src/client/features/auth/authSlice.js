import { createSlice } from "@reduxjs/toolkit";
import api from "../../store/api";

/** Authentication endpoints */
const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (credentials) => ({
        url: "/auth/register",
        method: "POST",
        body: credentials,
      }),
      transformErrorResponse: (response) => response.data,
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      transformErrorResponse: (response) => response.data,
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;

/** Session storage key for auth token */
const TOKEN_KEY = "token";

/** Reducer that stores payload's token in state and session storage */
const storeToken = (state, { payload }) => {
  state.token = payload.token;
  sessionStorage.setItem(TOKEN_KEY, payload.token);
};

/** Keeps track of JWT sent from API */
const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: sessionStorage.getItem(TOKEN_KEY),
  },
  reducers: {
    /** Logging out means wiping the stored token */
    logout: (state) => {
      state.token = null;
      sessionStorage.removeItem(TOKEN_KEY);
    },
  },
  extraReducers: (builder) => {
    // Store token when register or login succeeds
    builder.addMatcher(api.endpoints.register.matchFulfilled, storeToken);
    builder.addMatcher(api.endpoints.login.matchFulfilled, storeToken);
  },
});

export const { logout } = authSlice.actions;

export const selectToken = (state) => state.auth.token;

export default authSlice.reducer;
