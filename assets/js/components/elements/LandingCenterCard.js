import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@mui/material'

function LandingCenterCard({ figure, name }) {
  return (
    <Grid item xs={4}>
      <Typography variant="h1" component="div">
        {figure}{' '}
      </Typography>
      <Typography variant="body1" component="div">
        {name}
      </Typography>
    </Grid>
  )
}

LandingCenterCard.propTypes = {
  figure: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
}

export default LandingCenterCard
