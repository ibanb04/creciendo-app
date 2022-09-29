import { combineReducers } from "@reduxjs/toolkit";
import departmentReducer from "../slice/department.slice";
declare global {
    type RootState = ReturnType<typeof rootReducer>;
  }

const rootReducer = combineReducers({
  department: departmentReducer,
});

export default rootReducer;