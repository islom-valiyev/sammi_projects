import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    loggedIn: false,
    user: null
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
            state.loggedIn =true
        },
        registerUserSuccess: state => { },
        registerUserFailure: state => { },

    }
})
export const{loginUserStart,registerUserStart} = AuthSlice.actions
export default AuthSlice.reducer