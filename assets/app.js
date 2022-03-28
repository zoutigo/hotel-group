import React from "react"
import { render } from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { SnackbarProvider } from "notistack"
import { QueryClient, QueryClientProvider } from "react-query"
import { ThemeProvider } from "@mui/material/styles"
import { StoreProvider } from "./js/components/utils/Store"
import "./styles/app.css"
import Home from "./js/components/Home"
import theme from "./js/components/utils/theme"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      retry: 1,
      retryDelay: 500,
    },
  },
})

render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <StoreProvider>
          <Router>
            <Home />
          </Router>
        </StoreProvider>
      </SnackbarProvider>
    </ThemeProvider>
  </QueryClientProvider>,

  document.getElementById("root")
)
