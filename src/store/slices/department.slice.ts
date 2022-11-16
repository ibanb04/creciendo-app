import { createSlice } from "@reduxjs/toolkit";

export const departmentSlice = createSlice({
  name: "department",
  initialState: {
    nameDepartment: "",
  },
  reducers: {
    setDepartment: (state, { payload }) => {
      state.nameDepartment = payload;
    },
  },
});

export const { setDepartment } = departmentSlice.actions;

export default departmentSlice.reducer;