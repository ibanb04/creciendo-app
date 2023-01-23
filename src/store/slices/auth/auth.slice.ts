import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "checking",
  uid: null,
  displayName: null,
  email: null,
  photoURL: null,
  role: null,
  errorMessage: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.status = "authenticated";
      state.uid = payload.uid;
      state.displayName = payload.displayName;
      state.email = payload.email;
      state.photoURL = payload.photoURL;
      state.role = payload.role;
    },
    logout: (state, { payload }) => {
      state.status = "not-authenticated"; // 'checking' | 'authenticated' | 'not-authenticated'
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.errorMessage = payload.code;
    },
    checkingCredentials: (state) => {
      state.status = "checking";
    },
    resetErrorMessage: (state) => {
      state.errorMessage = null;
    },
    updatePhotoUrl: (state, { payload }) => {
      state.photoURL = payload;
    },
    updateDisplayName: (state, { payload }) => {
      state.displayName = payload;
    }
  },
});

export const { login, logout, checkingCredentials, resetErrorMessage, updatePhotoUrl, updateDisplayName } = authSlice.actions;

export default authSlice.reducer;
