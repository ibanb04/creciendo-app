import { combineReducers } from "@reduxjs/toolkit";
import departmentReducer from "../store/slices/department/department.slice";
import authReducer from "../store/slices/auth/auth.slice";
import studentReducer from "../store/slices/student/student.slice";
import ejectorDepartmentReducer from "../store/slices/department/ejectorDepartment.slice";
import interviewReducer from "../store/slices/interview/interview.slice";
import modalReducer from "../store/slices/modal/modal.slice";
import alertReducer from "../store/slices/alert/alert.slice";
declare global {
  type RootState = ReturnType<typeof rootReducer>;
}

const rootReducer = combineReducers({
  department: departmentReducer,
  ejectorDepartment: ejectorDepartmentReducer,
  auth: authReducer,
  student: studentReducer,
  interview: interviewReducer,
  modalState: modalReducer,
  alert: alertReducer,
});

export default rootReducer;
