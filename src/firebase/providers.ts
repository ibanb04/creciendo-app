import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseAuth } from "./config";


export const registerWithEmailAndPassword = async (email: string, password: string, displayName: string) => {
        try {
            const resp = await createUserWithEmailAndPassword(
                FirebaseAuth,
                email,
                password
              );
                console.log(resp);
        } catch (error) {
            console.log(error);
        }
}
