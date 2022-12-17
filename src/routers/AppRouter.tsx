import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { DashboardRoutes } from "./DashboardRoutes";
import { useCheckAuth } from '../hooks/useCheckAuth';
import CheckingAuth from "../ui/CheckingAuth";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import Contrato from "../shared/Documents/Contrato";

export const AppRouter = () => {
  const status = useCheckAuth();
  if (status === 'checking') return <CheckingAuth />
  return (
    <BrowserRouter>
      <Routes>
        {status === 'authenticated' ? (
          <>
            <Route path="/contrato-matricula" element={
              <Contrato />
            } />
            <Route path="/*" element={<DashboardRoutes />} />
          </>
        ) : (
          <Route path="/auth/*" element={<AuthRoutes />} />
        )}

        <Route path="/*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </BrowserRouter>
  );
};
