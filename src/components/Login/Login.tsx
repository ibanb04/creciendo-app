import { Button } from "@mui/material";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../auth/types/types";
import { Box } from "@mui/system";
import { Link as RouterLink } from "react-router-dom";

export const Login = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const lastPath = localStorage.getItem("lastPath") || "/";
  const handleLogin = () => {
    dispatch({
      type: types.login,
      payload: {
        name: "Jesus Ramos",
      },
    });

    navigate(lastPath, { replace: true });
  };
  return (
    <>
      <Button variant="contained" onClick={handleLogin}>Login</Button>
      <RouterLink to="/register">
        <Button variant="contained" >Registrar</Button>
      </RouterLink>
    </>
  );
};
