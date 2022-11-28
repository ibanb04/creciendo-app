import { createSlice } from "@reduxjs/toolkit";

export const departmentSlice = createSlice({
  name: "department",
  initialState: {
    nameDepartment: "",
    ejectorDepartment: "",
  },
  reducers: {
    setDepartment: (state, { payload }) => {
      state.nameDepartment = payload.nameDepartment;
      state.ejectorDepartment = payload.ejectorDepartment;
    },
  },
});

export const { setDepartment } = departmentSlice.actions;

export default departmentSlice.reducer;
