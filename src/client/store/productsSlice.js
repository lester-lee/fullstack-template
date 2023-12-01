import api from "./api";

const productsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
      providesTags: ["Products"],
    }),
    getProduct: builder.query({
      query: (id) => `/products/${id}`,
      providesTags: ["Products"],
    }),
    // register: builder.mutation({
    //   query: (credentials) => ({
    //     url: "/register",
    //     method: "POST",
    //     body: credentials,
    //   }),
    // }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = productsApi;
