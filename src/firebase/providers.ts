import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore/lite";
import { FirebaseAuth, FirebaseDB } from "./config";

export const registerUserWithEmailAndPassword = async (
  email: string,
  password: string,
  displayName: string,
  role: string
) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    await updateProfile(resp.user, { displayName });
    const docRef = doc(FirebaseDB, `usuarios/${resp.user.uid}`);
    await setDoc(docRef, { email: email, rol: role });
    return {
      ok: true,
      displayName,
      email,
      role,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error,
    };
  }
};

export const loginWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
    const { displayName, photoURL, uid } = resp.user;
    return {
      ok: true,
      displayName,
      photoURL,
      uid,
    }
  } catch (error) {
    return {
      ok: false,
      errorMessage: error,
    };
  }
}