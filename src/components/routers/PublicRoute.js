import { useContext } from "react";
import { AuthContext } from "../../auth/authContext";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({children}) => {

    const {user} = useContext(AuthContext);

    return !user.logged
        ? children
        : <Navigate to="/sidebar" />
}