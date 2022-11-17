import { createUserWithEmailAndPassword } from "firebase/auth";
import { FirebaseAuth } from "./config";

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
