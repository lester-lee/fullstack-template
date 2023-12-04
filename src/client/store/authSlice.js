import api from "./api";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: ({ username, password }) => ({
        url: "auth/register",
        method: "POST",
        body: { username, password },
      }),
    }),
    login: builder.mutation({
      query: ({ username, password }) => ({
        url: "auth/login",
        method: "POST",
        body: { username, password },
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
