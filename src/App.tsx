import { ThemeProvider } from "@emotion/react";
import { useEffect, useReducer } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import { AppRouter } from "./routers/AppRouter";
import { theme } from "./shared/themeConfig";
import { store } from "./store/store";

function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppRouter />
          <ReactQueryDevtools />
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
