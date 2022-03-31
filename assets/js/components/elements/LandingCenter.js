import { Box, Container, Grid, ListItem, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import ButtonPrimary from '../customs/ButtonPrimary'
import getRandomKey from '../utils/getRandomkey'
import LandingCenterCard from './LandingCenterCard'
import image from '../../../images/donalg.jpg'

const useStyles = makeStyles({
  imageContainer: {
    boxSizing: 'border-box',
    borderRadius: '9px',
    // overflow: 'hidden',
    background: 'red',
    '& img': {
      width: '35vw',
      height: '53vh',
      objectFit: 'cover',
      objectPosition: 'bottom left',
      borderRadius: '9px',
    },
  },
})

const statistics = [
  {
    name: 'Suites homologuées',
    figure: '2340',
  },
  {
    name: 'Etablissements actifs',
    figure: '786',
  },
  {
    name: 'Villes inscrites',
    figure: '234',
  },
]

function LandingCenter() {
  const classes = useStyles()

  return (
    <Grid container>
      <Grid container spacing={1}>
        <Grid item md={7}>
          <Grid container>
            <Typography variant="h1">Nos suites garantissent</Typography>
            <Typography variant="h1">Un confort vraiment</Typography>
            <Typography variant="h1">Eco responsable</Typography>
          </Grid>
          <Grid container mt={11}>
            {statistics.map((stat) => (
              <LandingCenterCard key={getRandomKey(99999)} {...stat} />
            ))}
          </Grid>
        </Grid>
        <Grid item container md={5}>
          <Grid
            item
            container
            className={classes.imageContainer}
            justifyContent="center"
          >
            <img src={image} alt="logo" />
          </Grid>
        </Grid>
      </Grid>
      <Grid container mt={6}>
        <ButtonPrimary path="/etablissement" type="button">
          Trouvez un établissement
        </ButtonPrimary>
      </Grid>
    </Grid>
  )
}

export default LandingCenter
