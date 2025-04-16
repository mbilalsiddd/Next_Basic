import { configureStore } from '@reduxjs/toolkit'
import CounterReducer, { emptySplitApi } from './counterSlice'
// import counterReducer from "./counterSlice";




export const store = configureStore({
  reducer: {
    reducer:CounterReducer,
    counter:CounterReducer,  
    [emptySplitApi.reducerPath]: emptySplitApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(emptySplitApi.middleware),
})



