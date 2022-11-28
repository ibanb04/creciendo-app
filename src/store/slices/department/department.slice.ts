import { createSlice } from "@reduxjs/toolkit";

export const departmentSlice = createSlice({
  name: "department",
  initialState: {
    birthDepartment: "",
  },
  reducers: {
    setDepartment: (state, { payload }) => {
      state.birthDepartment = payload;
    },
  },
});

export const { setDepartment } = departmentSlice.actions;

export default departmentSlice.reducer;
