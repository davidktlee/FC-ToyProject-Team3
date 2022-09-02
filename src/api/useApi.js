import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const useApi = createApi({
  reducerPath: 'useApi',
  tagTypes: ['Carts', 'likeproduct'],
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
      providesTags: ['Carts']
    }),
    addCart: builder.mutation({
      query: ({token, productId}) => ({
        url: `/carts/${productId}`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ['Carts']
    }),
    cancelCart: builder.mutation({
      query: ({token, productId}) => ({
        url: `/carts/${productId}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ['Carts']
    }),
    WishList: builder.query({
      query: token => ({
        url: '/interests',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: [{type: 'likeproduct'}]
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
      invalidatesTags: ['likeproduct']
    }),
    WishListDelete: builder.mutation({
      query: ({ productId, token }) => ({
        url: `interests/${productId}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ['likeproduct']
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
  useAddCartMutation,
  useCancelCartMutation,
} = useApi
