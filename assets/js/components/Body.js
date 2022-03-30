import React from 'react'
import { styled } from '@mui/styles'
import { Redirect, Switch, Route, Link, withRouter } from 'react-router-dom'

import LoginPage from './routes/LoginPage'
import RegisterPage from './routes/RegisterPage'
import BookingPage from './routes/BookingPage'
import ContactPage from './routes/ContactPage'
import EtablissementListPage from './routes/EtablissementListPage'
import EtablissementPage from './routes/EtablissementPage'
import AccountPage from './routes/AccountPage'
import BookingListPage from './routes/BookingListPage'
import LandingPage from './routes/LandingPage'

export const StyledBody = styled('main')(({ theme }) => ({
  background: 'pink',
  minHeight: '92vh',
}))

function Body() {
  return (
    <StyledBody>
      <Switch>
        {/* <Redirect exact from="/" to="/users" /> */}

        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route
          path="/mon-compte/mes-reservations"
          component={BookingListPage}
        />
        <Route path="/mon-compte/administration" component={AccountPage} />
        <Route
          path="/mon-compte/administration/utilisateurs"
          component={AccountPage}
        />
        <Route
          path="/mon-compte/administration/etablissements"
          component={AccountPage}
        />
        <Route
          path="/mon-compte/gestion-de-mon-etablissement"
          component={AccountPage}
        />
        <Route path="/mon-compte" component={AccountPage} />
        <Route path="/reservation" component={BookingPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/etablissement/slug" component={EtablissementPage} />
        <Route
          path="/liste-des-etablissements"
          component={EtablissementListPage}
        />
        <Route path="/" component={LandingPage} />
      </Switch>
    </StyledBody>
  )
}

export default Body
