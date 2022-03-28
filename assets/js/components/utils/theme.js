import { createTheme, responsiveFontSizes } from "@material-ui/core"

const initialtheme = createTheme({
  typography: {
    h1: {
      fontSize: "3.5rem",
      lineHeight: "120%",
      fontWeight: "bold",
      margin: "1rem 0",
    },
    h2: {
      fontSize: "3rem",
      lineHeight: "120%",
      fontWeight: "bold",
      margin: "1rem 0",
    },
    h3: {
      fontSize: "1.75rem",
      lineHeight: "150%",
      fontWeight: "bold",
      margin: "1rem 0",
    },
    h4: {
      fontSize: "1.25rem",
      lineHeight: "150%",
      fontWeight: "bold",
      margin: "1rem 0",
    },
    h5: {
      fontSize: "0.875rem",
      lineHeight: "150%",
      fontWeight: "bold",
      margin: "1rem 0",
    },
    h6: {
      fontSize: "0.75rem",
      lineHeight: "150%",
      fontWeight: "bold",
      margin: "1rem 0",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: "160%",
      fontWeight: "normal",
      margin: "1rem 0",
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: "160%",
      fontWeight: "normal",
      margin: "1rem 0",
    },
  },
  palette: {
    primary: {
      main: "#70C174",
    },
    secondary: {
      main: "#BEF3C0",
    },
    tertiary: {
      main: "#EFF7F2",
    },
    primarytext: {
      main: "#1D2130",
    },
    secondarytext: {
      main: "#525560",
    },
    offwhite: {
      main: "#EBF0F9",
    },
    border: {
      main: "#E5E5E5",
    },
    black: {
      main: "#0B0706",
    },
    white: {
      main: "#FFFFFF",
    },
  },
})

const theme = responsiveFontSizes(initialTheme, { factor: 3 })

export default theme
