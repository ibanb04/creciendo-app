import { ThemeProvider } from "@emotion/react";
import { NavBar, Footer, Menu } from "./components";
import { theme } from "./shared/themeConfig";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Menu />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
