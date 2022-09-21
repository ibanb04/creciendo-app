import { ThemeProvider } from "@emotion/react";
import { useEffect, useReducer } from "react";
import { AuthContext } from "./auth/authContext";
import { authReducer } from "./auth/authReducer";
import { AppRouter } from "./components/routers/AppRouter";
import { theme } from "./shared/themeConfig";

function App() {
  const init = () => {
    return JSON.parse(localStorage.getItem("user")!) || { logged: false };
  };

  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    if (!user) return;
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </AuthContext.Provider>
  );
}

export default App;
