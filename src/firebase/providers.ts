import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore/lite";
import { FirebaseAuth, FirebaseDB } from "./config";
import { studentDefaultValuesProps } from "../components/AddOrEditStudent/utils/studentDefaultValues";
import { interviewDefaultValuesProps } from "../components/AddOrEditInterview/utils/interviewDefaultValues";

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

export const updatePhotoUrlFirebase = async (
  photoURL: string
) => {
  const { currentUser } = FirebaseAuth;
  if (currentUser) {
    await updateProfile(currentUser, { photoURL });
    return {
      ok: true,
      photoURL,
    };
  } else {
    return {
      ok: false,
      errorMessage: "No existe un usuario activo",
    };
  }
};


export const loginWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    const resp = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { displayName, photoURL, uid } = resp.user;
    return {
      ok: true,
      displayName,
      photoURL,
      uid,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error,
    };
  }
};

export const logoutFirebase = async () => {
  try {
    await FirebaseAuth.signOut();
    return { ok: true };
  } catch (error) {
    return { ok: false, errorMessage: error };
  }
};
export const startStudenRegister = async (
  data: studentDefaultValuesProps | interviewDefaultValuesProps
) => {
  try {
    const docuRef = await doc(FirebaseDB, `estudiantes/${data.idNumber}`);
    setDoc(docuRef, data);
  } catch (error) {
    console.log(error);
  }
};

export const updateStudent = async (data: any) => {
  try {
    const docuRef = await doc(FirebaseDB, `estudiantes/${data.idNumber}`);
    updateDoc(docuRef, data);
  } catch (error) {
    console.log(error);
  }
};

export const updateInterview = async (data: any) => {
  try {
    const docuRef = await doc(FirebaseDB, `entrevistas/${data.studentId}`);
    updateDoc(docuRef, data);
  } catch (error) {
    console.log(error);
  }
};

export const deleteStudent = async (id: string) => {
  try {
    const docuRef = await doc(FirebaseDB, `estudiantes/${id}`);
    deleteDoc(docuRef);
  } catch (error) {
    console.log(error);
  }
};

export const deleteInterview = async (id: string) => {
  try {
    const docuRef = await doc(FirebaseDB, `entrevistas/${id}`);
    deleteDoc(docuRef);
  } catch (error) {
    console.log(error);
  }
};


export const registerInterview = async (
  data: studentDefaultValuesProps | interviewDefaultValuesProps
) => {
  try {
    const docuRef = await doc(FirebaseDB, `entrevistas/${data.studentId}`);
    setDoc(docuRef, data);
  } catch (error) {
    console.log(error);
  }
};

export const getStudentById = async (id: string) => {
  try {
    const docuRef = await doc(FirebaseDB, `estudiantes/${id}`);
    const docSnap = await getDoc(docuRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (id: string) => {
  try {
    const docuRef = await doc(FirebaseDB, `usuarios/${id}`);
    const docSnap = await getDoc(docuRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getInterviewById = async (id: string) => {
  try {
    const docuRef = await doc(FirebaseDB, `entrevistas/${id}`);
    const docSnap = await getDoc(docuRef);
    if (docSnap.exists()) {
      return await docSnap.data();
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};


export const getStudents = async () => {
  const querySnapshot = await getDocs(collection(FirebaseDB, "estudiantes/"));
  const students = await querySnapshot.docs.map((doc) => doc.data());
  return students;
};


export const getInterviews = async () => {
  const querySnapshot = await getDocs(collection(FirebaseDB, "entrevistas/"));
  const interviews = await querySnapshot.docs.map((doc) => doc.data());
  return interviews;
};
