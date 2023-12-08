import api from "../../store/api";
import { createSlice } from "@reduxjs/toolkit";

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

const TOKEN_KEY = "token";

const storeToken = (state, { payload }) => {
  state.token = payload.token;
  window.sessionStorage.setItem(TOKEN_KEY, payload.token);
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: window.sessionStorage.getItem(TOKEN_KEY),
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      window.sessionStorage.removeItem(TOKEN_KEY);
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.login.matchFulfilled, storeToken);
    builder.addMatcher(api.endpoints.register.matchFulfilled, storeToken);
  },
});

export const { logout } = authSlice.actions;

// function that retrieves token from state
export const selectToken = (state) => state.auth.token;

export default authSlice.reducer;

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetStoreDetailsQuery,
} = authApi;
