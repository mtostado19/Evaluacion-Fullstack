import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: false,
  user: null,
  token: null,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginReducer: (state, action) => {
          state.isAuth = true
          console.log("action", action.payload)
          state.user = action.payload.user
          state.token = action.payload.token
        },
        logoutReducer: (state) => {
          state.isAuth = false
          state.user = null
          state.token = null
        }
    }
})

export const { loginReducer, logoutReducer } = authSlice.actions

export default authSlice.reducer