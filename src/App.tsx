import { ThemeProvider } from "@emotion/react";
import { useEffect, useReducer } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { AuthContext } from "./auth/authContext";
import { authReducer } from "./auth/authReducer";
import { AppRouter } from "./routers/AppRouter";
import { theme } from "./shared/themeConfig";

function App() {
  const init = () => {
    return JSON.parse(localStorage.getItem("user")!) || { logged: false };
  };

  const [user, dispatch] = useReducer(authReducer, {}, init);

  console.log(user);
  useEffect(() => {
    if (!user) return;
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext.Provider value={{ user, dispatch }}>
        <ThemeProvider theme={theme}>
          <AppRouter />
          <ReactQueryDevtools />
        </ThemeProvider>
      </AuthContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
