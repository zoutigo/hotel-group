import { Grid } from '@mui/material'
import React from 'react'
import LandingBottom from '../elements/LandingBottom'
import LandingCenter from '../elements/LandingCenter'

function LandingPage() {
  return (
    <Grid container spacing={1} pt={8}>
      <LandingCenter />
      <LandingBottom />
    </Grid>
  )
}

export default LandingPage
