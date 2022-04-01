/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react'
import PropTypes from 'prop-types'
import { Box, Grid, Typography } from '@mui/material'
import { styled } from '@mui/styles'
import useImage from '../hook/useImage'

const StyledNameTypo = styled(Typography)(({ theme }) => ({
  color: theme.palette.primarytext.main,
}))
const StyledDescriptionTypo = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondarytext.main,
}))
const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    maxWidth: 345,
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },

  '& .media': {
    '& img': {
      width: '100%',
      objectFit: 'contain',
      borderRadius: '19px',
    },
  },
  '& .title': {
    textAlign: 'left',
    [theme.breakpoints.down('md')]: {
      padding: '0 2rem',
    },
  },
  '& .description': {
    textAlign: 'left',
    [theme.breakpoints.down('md')]: {
      padding: '0 2rem',
    },
  },
}))

function SmallCard({ image, name, description, city, variant }) {
  const { image: pic } = useImage(image)
  return (
    <StyledGrid item container xs={12} md={3}>
      <Box className="media">
        <img src={pic} alt={name} />
      </Box>
      <Box className="title">
        <StyledNameTypo
          variant="h4"
          sx={{
            textTransform: variant !== 'homepage' ? 'uppercase' : 'capitalize',
          }}
        >
          {name}
        </StyledNameTypo>
      </Box>
      {city && (
        <Box className="title">
          <StyledNameTypo variant="h4">{city}</StyledNameTypo>
        </Box>
      )}
      <Box className="description">
        <StyledDescriptionTypo variant="caption">
          {description}
        </StyledDescriptionTypo>
      </Box>
    </StyledGrid>
  )
}

SmallCard.defaultProps = {
  city: null,
  variant: 'homepage',
}

SmallCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  city: PropTypes.string,
  variant: PropTypes.string,
}

export default SmallCard
