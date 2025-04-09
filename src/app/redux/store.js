import { configureStore } from '@reduxjs/toolkit'
import reducer from './counterSlice'
// import counterReducer from "./counterSlice";


export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    reducer
  },
})



