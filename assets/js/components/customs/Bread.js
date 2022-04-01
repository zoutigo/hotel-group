import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@mui/material'
import { styled } from '@mui/styles'
import { useHistory } from 'react-router-dom'

const StyledTypo = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondarytext.main,
  textTransform: 'uppercase',
}))

const StyledGrid = styled(Grid)(() => ({
  paddingTop: '15rem ',
  alignItems: 'center',
  '& span': {
    width: '3rem',
    height: '2px',
    background: 'blue',
    marginRight: '2rem',
  },
}))

function Bread({ title }) {
  return (
    <StyledGrid container>
      <span>&nbsp;</span>
      <StyledTypo variant="body1">{title}</StyledTypo>
    </StyledGrid>
  )
}

Bread.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Bread
