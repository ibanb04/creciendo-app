import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isFetching: false,
}

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    setFetching: (state, { payload }) => {
        state.isFetching = payload
    }
  }
});

export const {setFetching} = studentSlice.actions;

export default studentSlice.reducer