import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    ejectorDepartment: '',
}

const ejectorDepartmentSlice = createSlice({
    name: 'ejectorDepartment',
    initialState: initialState,
    reducers: {
        setEjectorDepartment: (state, { payload }) => {
            state.ejectorDepartment = payload;
        }
    }
});

export const { setEjectorDepartment } = ejectorDepartmentSlice.actions

export default ejectorDepartmentSlice.reducer