import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api',
  }),
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => '/products',
      providesTags: ['Product'],
    }),
    }),
});

export const {
  useGetProductsQuery,
} = productsApi;