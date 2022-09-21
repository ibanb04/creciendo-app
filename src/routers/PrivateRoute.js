import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/authContext";

export const PrivateRoute = ({children}) => {

    const {user} = useContext(AuthContext);

    const {pathname} = useLocation();
    localStorage.setItem('lastPath', pathname);

    return user.logged
        ? children
        : <Navigate to="/login" />
}