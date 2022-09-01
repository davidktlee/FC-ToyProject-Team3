import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { useCookies, Cookies } from 'react-cookie'


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
      query: token => ({
        url: '/products/customization',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getSearchProducts: builder.mutation({
      query: ({ type, keyword, token }) => ({
        url: '/products/search',
        method: 'POST',
        body: { type, keyword },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      transformResponse: res => res,
    }),
    getUserData: builder.query({
      query: token => ({
        url: '/member',
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
  useGetUserDataQuery,
} = useApi
