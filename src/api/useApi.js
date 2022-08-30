import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const useApi = createApi({
  reducerPath: 'useApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_REACT_APP_API_URL,
  }),
  endpoints: builder => ({
    signIn: builder.mutation({
      query: ({ data }) => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
      }),
    }),
    signUp: builder.mutation({
      query: ({ data }) => ({
        url: '/auth/signup',
        method: 'POST',
        body: data,
      }),
    }),
    getProducts: builder.query({
      query: () => '/products',
    }),
    getUserProducts: builder.query({
      query: () => '/products/customization',
    }),
    getSearchProducts: builder.mutation({
      query: ({ type, keyword }) => ({
        url: '/products/search',
        method: 'POST',
        body: { type, keyword },
      }),
    }),
  }),
})

export const {
  useSignInMutation,
  useSignUpMutation,
  useGetProductsQuery,
  useGetUserProductsQuery,
  useGetSearchProductsMutation,
} = useApi
