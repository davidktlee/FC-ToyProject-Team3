import { configureStore } from '@reduxjs/toolkit'
import { useApi } from '../api/useApi'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    [useApi.reducerPath]: useApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(useApi.middleware),
})

setupListeners(store.dispatch)

export default store
