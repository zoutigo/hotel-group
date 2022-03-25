import React from "react"
import { render } from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { SnackbarProvider } from "notistack"
import { StoreProvider } from "../utils/Store"
import "./styles/app.css"
import Home from "./js/components/Home"

render(
  <ThemeProvider theme={theme}>
    <SnackbarProvider anchorOrigin={{ vertical: "top", horizontal: "center" }}>
      <StoreProvider>
        <Router>
          <Home />
        </Router>
      </StoreProvider>
    </SnackbarProvider>
  </ThemeProvider>,

  document.getElementById("root")
)
