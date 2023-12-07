import api from "../../store/api";

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
    addProduct: builder.mutation({
      query: (product) => ({
        url: `/products/store`,
        method: "POST",
        body: product,
      }),
    }),
    getProductsByStoreId: builder.query({
      query: (id) => `/products/store/${id}`,
      providesTags: ["Products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetProductsByStoreIdQuery,
  useAddProductMutation,
} = productsApi;
