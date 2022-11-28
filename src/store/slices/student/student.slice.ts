import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
    selectetStudent: null,
    birtDate: null,
}

const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        setStudent(state, { payload }) {
            state.selectetStudent = payload;
        },
        resetDepartmentValue(state) {
            state.selectetStudent.birthDepartment = null;

        }
    }
});

export const { setStudent, resetDepartmentValue } = studentSlice.actions

export default studentSlice.reducer