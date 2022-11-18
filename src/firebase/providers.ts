import { createUserWithEmailAndPassword } from "firebase/auth";
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
    console.log(resp);
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

export const startStudenRegister = async (data: any) => {
  try {
    const docuRef = await doc(FirebaseDB, `estudiantes/${data.idNumber}`);
    setDoc(docuRef, data);
  } catch (error) {
    console.log(error);
  }
};
