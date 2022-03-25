import { createTheme, responsiveFontSizes } from "@material-ui/core"

const initialtheme = createTheme({
  typography: {
    h1: {
      fontSize: "1.6rem",
      fontWeight: 400,
      margin: "1rem 0",
    },
    h2: {
      fontSize: "1.4rem",
      fontWeight: 400,
      margin: "1rem 0",
    },
  },
  palette: {
    type: darkMode ? "dark" : "light",
    primary: {
      main: "#f0c000",
    },
    secondary: {
      main: "#208080",
    },
  },
})

const theme = responsiveFontSizes(initialTheme, { factor: 3 })

export default theme
