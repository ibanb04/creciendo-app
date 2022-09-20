import { ThemeProvider } from "@emotion/react";
import { Footer, Sidebar } from "./components";
import { theme } from "./shared/themeConfig";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Sidebar />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
