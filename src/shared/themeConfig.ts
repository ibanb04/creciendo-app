import { createTheme } from "@mui/material/styles";
import "@fontsource/pt-serif-caption";
export const theme = createTheme({
  typography: {
    h3: { fontFamily: "Didact Gothic" },
    h4: { fontFamily: "Didact Gothic", fontWeight: 500 },
    h5: { fontFamily: "Work Sans", fontWeight: 500 },
    h6: { fontFamily: "Work Sans", fontWeight: 500 },
    body1: { fontFamily: "hind" },
    body2: { fontFamily: "hind" },
    button: { fontFamily: "hind", fontWeight: 500 },
  },
  palette: {
    primary: {
      main: "rgba(229, 128, 255, 0.45)",

    },
    secondary: {
      main: "rgba(39, 33, 69, 0.72)",
      light: "#f8f8f8",
    },
    neutral: {
      main: '#f8f8f8',
      contrastText: '#fff',
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
          style: { borderRadius: 18 },
        },
      ],
    },
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }

}
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}
