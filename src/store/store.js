import { configureStore, combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  // 이름 : 리듀서 이름,
  // 이름 : 리듀서 이름
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
