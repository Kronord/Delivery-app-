import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kronord-delivery-app.herokuapp.com/api',
  }),
  endpoints: builder => ({
    addUser: builder.mutation({
      query: creds => ({
        url: '/user',
        method: "POST",
        body: creds,
      })
    }),
    }),
});

export const {
  useAddUserMutation,
} = usersApi;