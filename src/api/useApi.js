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
    likeProductList: builder.mutation({
      query: () => ({
        url:'/interests',
        method: 'GET',
      }),
    }),
    likeProductAdd: builder.mutation({
      query: ({ data }, productId) => ({
        url: `/interests/${productId}`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
})

export const { useSignInMutation, useSignUpMutation, useLikeProductListMutation, useLikeProductAddMutation } = useApi
