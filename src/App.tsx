import { ThemeProvider } from "@emotion/react";
import {  Footer, Menu } from "./components";
import { theme } from "./shared/themeConfig";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Menu />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
