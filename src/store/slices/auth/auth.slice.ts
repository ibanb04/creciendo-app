import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: 'checking',
    uid: null,
    displayName: null,
    photoURL: null,
    errorMenssage: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, { payload }) => {
        },
        logout: (state) => {
        },
        checkingCredentials: (state) => {
        }


    }
});

export const { login, logout, checkingCredentials } = authSlice.actions

export default authSlice.reducer