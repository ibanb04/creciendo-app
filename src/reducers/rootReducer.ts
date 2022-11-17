import { combineReducers } from "@reduxjs/toolkit";
import departmentReducer from "../store/slices/department.slice";
import authReducer from "../store/slices/auth/auth.slice";
declare global {
  type RootState = ReturnType<typeof rootReducer>;
}

const rootReducer = combineReducers({
  department: departmentReducer,
  auth: authReducer,
});

export default rootReducer;
