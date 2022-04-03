import React, { useCallback, useState } from 'react'
import { Button, Grid, Tooltip, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import { styled, useTheme } from '@mui/styles'
import useImage from '../hook/useImage'
import useStyles from '../../style'
import StyledNavLink from './StyledNavLink'
import ButtonPrimary from './ButtonPrimary'
import getRandomKey from '../utils/getRandomkey'
import ModalImage from './ModalImage'
import Image from './Image'
import StyledSection from './StyledSection'

const StyledGrid = styled(Grid)(({ theme }) => ({
  '& .card-suit-media': {
    '& img': {
      width: '100%',
      objectFit: 'contain',
      borderRadius: '5px',
      '&:hover': {
        filter: 'opacity(.8)',
      },
    },
  },
}))

function CardSuit({ suit }) {
  const classes = useStyles()
  const { name, description, price, images, banner, booking } = suit
  const { palette } = useTheme()
  const { image: pic } = useImage(banner)
  const [showAlbum, setShowAlbum] = useState(false)
  const [modal, setModal] = useState(false)
  const [tempImgSrc, setTempImgSrc] = useState(null)

  const handleclick = useCallback(() => {
    setShowAlbum(!showAlbum)
  }, [showAlbum])

  const handleClickImage = useCallback(
    (picture) => {
      setTempImgSrc(picture)
      setModal(true)
    },
    [setTempImgSrc, setModal]
  )

  return (
    <StyledGrid container>
      <Grid container>
        <Typography variant="h2">{name}</Typography>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} className="card-suit-media">
          <img src={pic} alt={name} />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          container
          flexDirection="row"
          justifyContent="space-between"
        >
          <Grid item container className={`${classes.textJustify}`}>
            <Typography variant="body1">{description}</Typography>
          </Grid>
          <Grid item container>
            <Typography variant="body1">
              Lien booking.com : {booking}
            </Typography>
          </Grid>
          <Grid item container alignItems="center">
            <Grid item xs={2}>
              <Tooltip title="album photo" arrow>
                <Button onClick={handleclick}>Plus de photos</Button>
              </Tooltip>
            </Grid>
            <Grid item xs={4} className={classes.textCenter}>
              <Typography variant="h3">{price} €</Typography>
            </Grid>
            <Grid item xs={6}>
              <StyledNavLink
                to={{
                  pathname: '/reserver',
                  state: { suit },
                }}
              >
                <ButtonPrimary fullWidth>Réserver maintenant</ButtonPrimary>
              </StyledNavLink>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {showAlbum && (
        <Grid container spacing={2}>
          <ModalImage
            modal={modal}
            setModal={setModal}
            setTempImgSrc={setTempImgSrc}
            tempImgSrc={tempImgSrc}
            setShowAlbum={setShowAlbum}
          />
          {images &&
            images.map((imge) => (
              <Grid
                key={getRandomKey(99999)}
                item
                sm={12}
                md={6}
                lg={3}
                className="card-suit-media"
                sx={{ cursor: 'pointer' }}
                onClick={() => handleClickImage(imge)}
              >
                <Image {...imge} />
              </Grid>
            ))}
        </Grid>
      )}
    </StyledGrid>
  )
}

CardSuit.defaultProps = {}

CardSuit.propTypes = {
  suit: PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    banner: PropTypes.string.isRequired,
    booking: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.exact({
        alt: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
}

export default React.memo(CardSuit)
