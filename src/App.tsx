import { ThemeProvider } from "@emotion/react";
import { AppRouter } from "./components/routers/AppRouter";
import { theme } from "./shared/themeConfig";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
