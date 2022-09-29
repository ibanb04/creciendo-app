import { ThemeProvider } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useReducer } from "react";
import { AuthContext } from "./auth/authContext";
import { authReducer } from "./auth/authReducer";
import { AppRouter } from "./routers/AppRouter";
import { theme } from "./shared/themeConfig";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


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
