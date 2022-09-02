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
    getCart: builder.query({
      query: (token) => ({
        url: '/carts',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: [{ type: 'Carts', id: 'LIST'}]
    }),
    cancelCart: builder.mutation({
      query: ({token, productId}) => ({
        url: `/carts/${productId}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: (result) => result ? [{type: 'Carts', id: 'LIST'}] : []
    }),
    WishList: builder.query({
      query: token => ({
        url: '/interests',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    WishListAdd: builder.mutation({
      query: ({ data, productId, token }) => ({
        url: `interests/${productId}`,
        method: 'POST',
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    WishListDelete: builder.mutation({
      query: ({ productId, token }) => ({
        url: `interests/${productId}`,
        method: 'DELETE',
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
  useWishListQuery,
  useWishListAddMutation,
  useWishListDeleteMutation,
  useGetUserDataQuery,
  useGetCartQuery,
  useCancelCartMutation,
} = useApi
