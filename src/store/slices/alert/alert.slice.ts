import { createSlice } from '@reduxjs/toolkit';

export interface AlertState {
    message: string;
    severity: 'success' | 'info' | 'warning' | 'error';
    open: boolean;
    type: 'interview' | 'student' | 'auth';
}

const initialState: AlertState = {
    message: '',
    severity: 'success',
    open: false,
    type: 'student'
}

const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        setAlert: (state, { payload }) => {
            state.message = payload.message;
            state.severity = payload.severty;
            state.open = payload.open;
            state.type = payload.type;
        },
        resetAlert: (state) => {
            state.message = '';
            state.severity = 'success';
            state.open = false;
            state.type = 'student';
        }
    }
});

export const { setAlert, resetAlert } = alertSlice.actions

export default alertSlice.reducer