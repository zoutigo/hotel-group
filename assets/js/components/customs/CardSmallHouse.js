/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react'
import PropTypes from 'prop-types'
import { Box, Grid, Typography } from '@mui/material'
import { styled } from '@mui/styles'
import useImage from '../hook/useImage'
import ButtonSecondary from './ButtonSecondary'
import StyledNavLink from './StyledNavLink'

const StyledNameTypo = styled(Typography)(({ theme }) => ({
  color: theme.palette.primarytext.main,
}))
const StyledDescriptionTypo = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondarytext.main,
}))
const StyledGrid = styled(Grid)(({ theme }) => ({
  '& >div': {
    width: '100%',
  },
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

function CardSmallHouse({ house }) {
  const { name, description, image, city, slug } = house
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
            textTransform: 'capitalize',
          }}
        >
          {name}
        </StyledNameTypo>
      </Box>

      <Box className="title">
        <StyledNameTypo variant="h4">{city}</StyledNameTypo>
      </Box>

      <Box className="description">
        <StyledDescriptionTypo variant="caption">
          {description.substring(0, 200)}
        </StyledDescriptionTypo>
      </Box>

      <StyledNavLink
        to={{
          pathname: `/liste-des-etablissements/${slug}`,
          state: {
            house,
          },
        }}
      >
        <ButtonSecondary fullWidth>En savoir plus ++</ButtonSecondary>
      </StyledNavLink>
    </StyledGrid>
  )
}

CardSmallHouse.propTypes = {
  house: PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    suits: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        banner: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        booking: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(
          PropTypes.exact({
            alt: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
          })
        ).isRequired,
      })
    ).isRequired,
  }).isRequired,
}

export default CardSmallHouse
