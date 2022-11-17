import { Navigate, Route, Routes } from "react-router-dom";
import { RegisterPage } from '../pages/RegisterPage';
import { Login } from '../pages/Login';

export const AuthRoutes = () => {

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/*" element={<Navigate to="/auth/login" />} />
        </Routes>
    );
};
