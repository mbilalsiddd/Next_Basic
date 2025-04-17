import { configureStore } from '@reduxjs/toolkit'
import  productReducer from './slices/productSlice'
import { emptySplitApi } from './emptySplitApi'


export const store = configureStore({
  reducer: {
    // reducer:productReducer,
    product:productReducer, 
    [emptySplitApi.reducerPath]: emptySplitApi.reducer                                             
  },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(emptySplitApi.middleware),
})

