import api from "./api";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: ({ username, password }) => ({
        url: "/api/auth/register",
        method: "POST",
        body: { username, password },
      }),
    }),
  }),
});

export const { useRegisterMutation } = authApi;
