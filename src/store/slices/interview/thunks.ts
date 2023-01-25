
import { Action, AnyAction } from "@reduxjs/toolkit";
import { studentRegister, registerInterview, updateInterview } from '../../../firebase/providers';
import { studentDefaultValuesProps } from '../../../components/AddOrEditStudent/utils/studentDefaultValues';
import { interviewDefaultValuesProps } from '../../../components/AddOrEditInterview/utils/interviewDefaultValues';
import { setAlert } from "../alert/alert.slice";

export interface Dispatch<A extends Action = AnyAction> {
    <T extends A>(action: T): T;
}

export const startInterviewRegister = (data: studentDefaultValuesProps | interviewDefaultValuesProps) => {
    return async (dispatch: Dispatch) => {
        const result = await registerInterview(data);
        if (!result.ok) return dispatch(setAlert({ message: result?.errorMessage, severity: 'error', type: 'interview', open: true }));
        dispatch(setAlert({ message: 'Registro exitoso entrevista!', severity: 'success', open: true, type: 'interview' }));
    };
}

export const startUpdateInterview = (data: studentDefaultValuesProps | interviewDefaultValuesProps) => {
    return async (dispatch: Dispatch) => {
        console.log(data);
        const result = await updateInterview(data);
        if (!result.ok) return dispatch(setAlert({ message: result?.errorMessage, severity: 'error', type: 'interview', open: true }));
        dispatch(setAlert({ message: 'Entrevista actualizada!', severity: 'success', open: true, type: 'interview' }));
    };
}