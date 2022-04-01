import React from 'react'
import { styled } from '@mui/styles'
import { Redirect, Switch, Route, Link, withRouter } from 'react-router-dom'
import { Grid } from '@mui/material'
import pages from './constants/pages'

const StyledBody = styled(Grid)(() => ({
  minHeight: '92vh',
}))

function Body() {
  return (
    <StyledBody>
      <Switch>
        {/* <Redirect exact from="/" to="/users" /> */}
        {pages.map((route) => (
          <Route key={route.path} {...route} exact />
        ))}
      </Switch>
    </StyledBody>
  )
}

export default Body
