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
        loginUserStart: state => { 
            state.isLoading =true
        },
        loginUserSuccess: state => { },
        loginUserFailure: state => { },
/////regester
        registerUserStart: state => { 
            state.isLoading =true
        },
        registerUserSuccess: state => { 
            state.loggedIn = true
            state.isLoading = false
        },
        registerUserFailure: state => {
            state.isLoading = false
            state.error = "error"
         },

    }
})
export const{loginUserStart,registerUserStart,registerUserSuccess,registerUserFailure} = AuthSlice.actions
export default AuthSlice.reducer