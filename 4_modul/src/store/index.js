import { configureStore } from "@reduxjs/toolkit"
import countReducer from "../components/reducers/countSlice"

export default configureStore({ reducer: countReducer, devTools: process.env.NODE_ENV !== 'production' })