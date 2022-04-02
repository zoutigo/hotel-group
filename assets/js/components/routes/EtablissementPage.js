import { Grid, Typography } from '@mui/material'
import { useTheme } from '@mui/styles'
import React from 'react'
import { useHistory } from 'react-router-dom'
import Bread from '../customs/Bread'
import CardSuit from '../customs/CardSuit'
import StyledPage from '../customs/StyledPage'
import StyledSection from '../customs/StyledSection'

function EtablissementPage() {
  const { palette } = useTheme()

  const { location } = useHistory()
  const {
    state: { house },
  } = location
  const { suits, name, description } = house

  return (
    <StyledPage>
      <StyledSection background={palette.white.main}>
        <Grid item container>
          <Bread title="Etabissement hotel" />
        </Grid>
        <Grid item container>
          <Typography variant="h1">{name}</Typography>
        </Grid>
        <Grid item container>
          <Typography variant="body1">{description}</Typography>
        </Grid>
      </StyledSection>
      <StyledSection background={palette.white.main}>
        {suits.map((suit) => (
          <CardSuit {...suit} key={suit.id} />
        ))}
      </StyledSection>
    </StyledPage>
  )
}

export default EtablissementPage
