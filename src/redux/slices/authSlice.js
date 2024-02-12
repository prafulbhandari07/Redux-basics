import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn : false,
  user : null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login : (state, action)=>{
        state.isLoggedIn = true
        state.user = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { login } = authSlice.actions

export default authSlice.reducer