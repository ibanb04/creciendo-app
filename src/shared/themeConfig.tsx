import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#f42272",

    },
    secondary: {
      main: "#272144",
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
