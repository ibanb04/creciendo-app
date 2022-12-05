import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedInterview: null,

}

const interviewSlice = createSlice({
    name: 'interview',
    initialState,
    reducers: {
        setInterview: (state, { payload }) => {
            state.selectedInterview = payload;
        }
    }
});

export const { setInterview } = interviewSlice.actions

export default interviewSlice.reducer