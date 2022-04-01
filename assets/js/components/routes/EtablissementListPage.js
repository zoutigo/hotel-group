import { Grid, styled } from '@mui/material'
import React from 'react'
import Bread from '../customs/Bread'
import SmallCard from '../customs/CardSmall'
import StyledGridSection from '../customs/StyledGridSection'
import EtablissementsListForm from '../elements/EtablissementsListForm'
import getRandomKey from '../utils/getRandomkey'

const StyledLandingCenterGrid = styled(StyledGridSection)(({ theme }) => ({
  background: theme.palette.white.main,
  [theme.breakpoints.down('lg')]: {
    paddingLeft: '1rem',
  },
}))

const etablissements = [
  {
    name: 'Energie ',
    description:
      'Ce sont souvent des panneaux solaires qui alimentent nos infrastructures.',
    image: 'landingbottom1.jpg',
    city: 'Madrid',
  },
  {
    name: 'Restauration',
    description:
      "l'approvisionnement se fait à moins de 40km de l'établissement.",
    image: 'landingbottom2.jpg',
    city: 'Madrid',
  },
  {
    name: 'Préservation .',
    description:
      "Tout au long de l'année, des équipes dédiés encadrent les activités",
    image: 'landingbottom3.jpg',
    city: 'Madrid',
  },
  {
    name: 'Solidarité avec ',
    description:
      'Les sont natifs de la région. Ils servent de relais pour les actions caritatives',
    image: 'landingbottom4.jpg',
    city: 'Madrid',
  },
]

function EtablissementListPage() {
  return (
    <StyledLandingCenterGrid container spacing={1} pt={8}>
      <Bread title="etablissements" />
      <Grid item container>
        <EtablissementsListForm />
      </Grid>
      <Grid item container justifyContent="space-evenly" spacing={2}>
        {etablissements.map((etab) => (
          <SmallCard key={getRandomKey(9999)} {...etab} variant="etab" />
        ))}
      </Grid>
    </StyledLandingCenterGrid>
  )
}

export default EtablissementListPage
