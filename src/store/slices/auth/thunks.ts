import { Action, AnyAction } from "@reduxjs/toolkit";
import { loginWithEmailAndPassword, logoutFirebase, registerUserWithEmailAndPassword, updatePhotoUrlFirebase, updateDisplayNameFirebase } from '../../../firebase/providers';
import { checkingCredentials, login, logout, updateDisplayName, updatePhotoUrl } from "./auth.slice";

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

export const startUpdatePhotoUrl = (photoUrl: string) => {
  return async (dispatch: Dispatch) => {
    const result = await updatePhotoUrlFirebase(photoUrl);
    if (!result.ok) return dispatch(logout(result.errorMessage));
    dispatch(updatePhotoUrl(result.photoURL));
  };
}

export const startUpdateDisplayName = (displayName: string) => {
  return async (dispatch: Dispatch) => {
    const result = await updateDisplayNameFirebase(displayName);
    if (!result.ok) return dispatch(logout(result.errorMessage));
    dispatch(updateDisplayName(result.displayName));
  };
}