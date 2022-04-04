import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from '@mui/material/styles'

import './styles/app.css'
import Home from './js/components/Home'
import theme from './js/components/utils/theme'
import { AppStateProvider } from './js/components/utils/Store'

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
    <AppStateProvider>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Router>
            <Home />
          </Router>
        </SnackbarProvider>
      </ThemeProvider>
    </AppStateProvider>
  </QueryClientProvider>,

  document.getElementById('root')
)
