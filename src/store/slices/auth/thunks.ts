import { Action, AnyAction } from "@reduxjs/toolkit";
import { loginWithEmailAndPassword, logoutFirebase, registerUserWithEmailAndPassword } from "../../../firebase/providers";
import { checkingCredentials, login, logout } from "./auth.slice";

export interface Dispatch<A extends Action = AnyAction> {
  <T extends A>(action: T): T;
}
interface CreatingUserProps {
  email: string;
  password: string;
  displayName: string;
  role: string;
}

export const startCreatingUserWithEmailAndPassword = ({
  email,
  password,
  displayName,
  role,
}: CreatingUserProps) => {
  return async (dispatch: Dispatch) => {
    dispatch(checkingCredentials());
    const result = await registerUserWithEmailAndPassword(
      email,
      password,
      displayName,
      role
    );

    if (!result.ok) return dispatch(logout(result.errorMessage));
    dispatch(login(result));
  };
};


export const startSingInWithEmailAndPassword = (
  email: string,
  password: string
) => {
  return async (dispatch: Dispatch) => {
    dispatch(checkingCredentials());
    const result = await loginWithEmailAndPassword(email, password);
    if (!result.ok) return dispatch(logout(result.errorMessage));
    dispatch(login(result));

  };

}

export const startLogout = () => {
  return async (dispatch: Dispatch) => {
    await logoutFirebase();
    dispatch(logout({ code: "" }));
  };
};