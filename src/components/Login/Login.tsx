import { Button } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";

export const Login = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const lastPath = localStorage.getItem("lastPath") || "/";
  const handleLogin = () => {
    dispatch({
      type: "login",
      payload: {
        name: "Jesus Ramos",
      },
    });

    navigate(lastPath, { replace: true });
  };
  return <Button onClick={handleLogin}>Login</Button>;
};
