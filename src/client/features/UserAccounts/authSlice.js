import api from "../../store/api";
import { createSlice } from "@reduxjs/toolkit";

// configures REGISTER, LOGIN and GET STORE DETAILS routing to API
const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: ({ username, password }) => ({
        url: "auth/register",
        method: "POST",
        body: { username, password },
      }),
      invalidatesTags: ["StoreDetails"],
    }),
    login: builder.mutation({
      query: ({ username, password }) => ({
        url: "auth/login",
        method: "POST",
        body: { username, password },
      }),
      invalidatesTags: ["StoreDetails"],
    }),
    getStoreDetails: builder.query({
      query: () => `auth/`,
      providesTags: ["StoreDetails"],
    }),
  }),
});

// assigns variable to use
const TOKEN_KEY = "token";

// function to STORE the TOKEN in state and session storage, under variable TOKEN_KEY
const storeToken = (state, { payload }) => {
  state.token = payload.token;
  window.sessionStorage.setItem(TOKEN_KEY, payload.token);
};

// sets state in redux store named "Auth", and sets it with TOKEN_KEY found in session storage
const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: window.sessionStorage.getItem(TOKEN_KEY),
  },
  reducers: {
    // defines token state as null, and removes TOKEN_KEY from session storage
    logout: (state) => {
      state.token = null;
      window.sessionStorage.removeItem(TOKEN_KEY);
    },
  },
  extraReducers: (builder) => {
    // calls storeToken function upon successful LOGIN and REGISTER
    builder.addMatcher(api.endpoints.login.matchFulfilled, storeToken);
    builder.addMatcher(api.endpoints.register.matchFulfilled, storeToken);
  },
});

// exports Auth API endpoints
export const {
  useRegisterMutation,
  useLoginMutation,
  useGetStoreDetailsQuery,
} = authApi;

// exports LOGOUT action
export const { logout } = authSlice.actions;

// function to SELECT TOKEN from redux state
export const selectToken = (state) => state.auth.token;

export default authSlice.reducer;
