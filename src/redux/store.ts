import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { demoReducer } from "./slices/demoSlice";

const store = configureStore({
  reducer: {
    demo: demoReducer
  }
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export default store;