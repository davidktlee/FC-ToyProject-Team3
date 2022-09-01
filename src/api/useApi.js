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
      query: () => ({
        url: '/carts',
        headers: {
          // Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTY2MjAxOTI2NH0.x2qqd7Pzkb5oh6rK-2P2bKfaKENjs6PYvn_ylO2qTCQdDOm4zj7fUAl2W_VXXeV-_tmq5-VxwS6oRlv96PUYhQ`,
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    WishList: builder.query({
      query: token => ({
        url: '/interests',
        method: 'GET',
        headers: {
          Authorization : `Bearer ${token}`,
        }
      })
    }),
    WishListAdd: builder.mutation({
      query: ({data, productId, token}) => ({
         url: `interests/${productId}`,
         method: 'POST',
         body: data,
         headers: {
          Authorization : `Bearer ${token}`,
        }
      }),
    }),
    WishListDelete: builder.mutation({
      query: ({ productId, token}) => ({ 
        url: `interests/${productId}`,
        method: 'DELETE',
        headers: {
          Authorization : `Bearer ${token}`,
        }
      })
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
} = useApi
