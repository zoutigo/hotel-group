import { Grid, styled } from '@mui/material'
import React from 'react'
import Bread from '../customs/Bread'
import StyledGridSection from '../customs/StyledGridSection'

const StyledLandingCenterGrid = styled(StyledGridSection)(({ theme }) => ({
  background: theme.palette.white.main,
  [theme.breakpoints.down('lg')]: {
    paddingLeft: '1rem',
  },
}))

function EtablissementListPage() {
  return (
    <StyledLandingCenterGrid container spacing={1} pt={8}>
      <Bread />
      <Grid item container>
        here the in put
      </Grid>
      <Grid item container>
        here the search result
      </Grid>
    </StyledLandingCenterGrid>
  )
}

export default EtablissementListPage
