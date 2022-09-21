import { createContext } from "react";

type UserType = {
    name: string;
    logged: boolean;
}

interface ContextType {
    user: UserType;
    dispatch: React.Dispatch<any>;
  }
  const initialState = {
    name: '',
    logged: false,
  }

export const AuthContext = createContext<ContextType>({user: initialState, dispatch: () => null});