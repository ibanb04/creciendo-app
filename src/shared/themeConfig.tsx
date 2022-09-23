import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ffebda",
    },
    secondary: {
      main: "#272144",
    },
    tertiary: {
      main: "#611b9b",
      lightGreen: "#cffccd",
      yellow: "#ffffcc",
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: { borderRadius: 50 },
        },
      ],
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
