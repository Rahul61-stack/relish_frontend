import { configureStore,createSlice } from "@reduxjs/toolkit";
import cartSlice from './cartSlice'
import authSlice from './authSlice'

export const cartActions = cartSlice.actions
export const authActions = authSlice.actions

const store = configureStore({
    reducer:{cart:cartSlice.reducer,auth:authSlice.reducer}
})
export {store}
