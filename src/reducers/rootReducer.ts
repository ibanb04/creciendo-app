import { combineReducers } from "@reduxjs/toolkit";
import departmentReducer from "../store/slices/department.slice";
import authReducer from "../store/slices/auth/auth.slice";
import studentReducer from "../store/slices/student/student.slice";
declare global {
  type RootState = ReturnType<typeof rootReducer>;
}

const rootReducer = combineReducers({
  department: departmentReducer,
  auth: authReducer,
  student: studentReducer,
});

export default rootReducer;
