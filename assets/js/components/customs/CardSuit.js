import React from 'react'
import { Grid, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import { useTheme } from '@mui/styles'

function CardSuit({ name, description, price, images }) {
  const { palette } = useTheme()
  return (
    <Grid container>
      <Grid container>
        <Typography variant="h2">{name}</Typography>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={4}>
          image
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid item container>
            Description
          </Grid>
          <Grid item container>
            <Grid item xs={5}>
              price{' '}
            </Grid>
            <Grid item xs={7}>
              Button{' '}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

CardSuit.defaultProps = {
  images: [],
}

CardSuit.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
}

export default CardSuit
