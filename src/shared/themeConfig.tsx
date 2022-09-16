import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ffcaff",
    },
    secondary: {
      main: "#cc99ff",
    },
    tertiary: {
      main: "#611b9b",
      lightGreen: "#cffccd",
      yellow: "#ffffcc",
    },
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: Palette["secondary"];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions["secondary"];
  }
  interface SimplePaletteColorOptions {
    lightGreen?: string;
    yellow?: string;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    tertiary: true;
  }
}
