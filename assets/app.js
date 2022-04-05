import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import { QueryClient, QueryClientProvider } from 'react-query'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import MomentUtils from '@date-io/moment'
import moment from 'moment'
import { ThemeProvider } from '@mui/material/styles'

import './styles/app.css'
import Home from './js/components/Home'
import theme from './js/components/utils/theme'
import { AppStateProvider } from './js/components/utils/Store'

moment.locale('fr')

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
  <LocalizationProvider dateAdapter={MomentUtils}>
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
    </QueryClientProvider>
  </LocalizationProvider>,
  document.getElementById('root')
)
