import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kronord-delivery-app.herokuapp.com/api',
  }),
  endpoints: builder => ({
    getProducts: builder.query({
      query: endpoint => `/${endpoint}`,
      providesTags: ['Product'],
    }),    
    }),
});

export const {
  useGetProductsQuery,
} = productsApi;