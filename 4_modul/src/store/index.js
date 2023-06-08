import { configureStore } from '@reduxjs/toolkit'
import { AuthSlice } from '../slice/auth'

export default configureStore({
  reducer: {
    AuthSlice,
  },
  devTools: process.env.NODE_ENV !== 'prodection',
})  