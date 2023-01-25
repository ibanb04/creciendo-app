
import { Action, AnyAction } from "@reduxjs/toolkit";
import { studentRegister } from "../../../firebase/providers";
import { studentDefaultValuesProps } from '../../../components/AddOrEditStudent/utils/studentDefaultValues';
import { interviewDefaultValuesProps } from '../../../components/AddOrEditInterview/utils/interviewDefaultValues';
import { setAlert } from "../alert/alert.slice";

export interface Dispatch<A extends Action = AnyAction> {
    <T extends A>(action: T): T;
}

export const startStudentRegister = (data: studentDefaultValuesProps | interviewDefaultValuesProps) => {
    return async (dispatch: Dispatch) => {
        const result = await studentRegister(data);
        if (!result.ok) return dispatch(setAlert({ message: result?.errorMessage, severity: 'error', open: true, type: 'student' }));
        dispatch(setAlert({ message: 'Registro exitoso!', severity: 'success', open: true, type: 'student' }));
    };
}

export const startUpdateStudent = (data: studentDefaultValuesProps | interviewDefaultValuesProps) => {
    return async (dispatch: Dispatch) => {
        const result = await studentRegister(data);
        if (!result.ok) return dispatch(setAlert({ message: result?.errorMessage, severity: 'error', open: true, type: 'student' }));
        dispatch(setAlert({ message: 'Estudiante actualizado!', severity: 'success', open: true, type: 'student' }));
    };
}