import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    loggedIn: false,
    user: null,
    error:null,
    
}

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        //// login
        signUserStart: state => { 
            state.isLoading =true
        },
        signUserSuccess: (state,action) => { 
            state.loggedIn = true
            state.isLoading = false
            state.user = action.payload    
        },
        signUserFailure: (state,action) => { 
            state.isLoading = false
            state.error = action.payload
        },

    }
})
export const{signUserStart, signUserSuccess, signUserFailure} = AuthSlice.actions
export default AuthSlice.reducer