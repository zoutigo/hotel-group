import { Grid } from '@mui/material'
import React from 'react'
import { styled } from '@mui/styles'
import LandingBottom from '../elements/LandingBottom'
import LandingCenter from '../elements/LandingCenter'

const StyledGrid = styled(Grid)(({ theme }) => ({
  padding: '',
}))

function LandingPage() {
  return (
    <StyledGrid container spacing={1} pt={8}>
      <LandingCenter />
      <LandingBottom />
    </StyledGrid>
  )
}

export default LandingPage
