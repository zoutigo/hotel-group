import { Grid, Typography } from '@mui/material'
import { useTheme } from '@mui/styles'
import React from 'react'
import Bread from '../customs/Bread'
import CardSuit from '../customs/CardSuit'
import StyledPage from '../customs/StyledPage'
import StyledSection from '../customs/StyledSection'

const etab = {
  name: 'Hotel relais de la reine',
  price: 123.56,
  description: `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit lacinia purus dictum bibendum. Proin sed sagittis dolor. Maecenas quis fermentum est. Vivamus cursus massa id est sollicitudin condimentum. Mauris at lobortis enim. Quisque a metus nec erat dapibus efficitur. Aenean mollis, neque in sagittis posuere, sapien dolor placerat magna, sit amet tincidunt est lacus id lacus. Aliquam a mi eget erat convallis elementum. Praesent eu diam nec augue elementum ultricies quis non elit.
Aliquam rutrum turpis ac ex fermentum venenatis. Nam eget elit ligula. Suspendisse euismod facilisis arcu, vehicula rutrum elit pellentesque sed. Etiam tellus libero, lacinia nec tristique eu, aliquet ut mauris. Aliquam dapibus convallis bibendum. Nam elementum lacus nunc, et rhoncus enim cursus ac. Nam velit ligula, vestibulum et ullamcorper ac, egestas nec lectus. Aenean dui lacus, blandit quis pellentesque vitae, hendrerit eget justo.`,
  suits: [
    {
      name: 'Angry bird',
      description: `
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit lacinia purus dictum bibendum. Proin sed sagittis dolor. Maecenas quis fermentum est. Vivamus cursus massa id est sollicitudin condimentum. Mauris at lobortis enim. Quisque a metus nec erat dapibus efficitur. Aenean mollis, neque in sagittis posuere, sapien dolor placerat magna, sit amet tincidunt est lacus id lacus. Aliquam a mi eget erat convallis elementum. Praesent eu diam nec augue elementum ultricies quis non elit.
  
  Aliquam rutrum turpis ac ex fermentum venenatis. Nam eget elit ligula. Suspendisse euismod facilisis arcu, vehicula rutrum elit pellentesque sed. Etiam tellus libero, lacinia nec tristique eu, aliquet ut mauris. Aliquam dapibus convallis bibendum. Nam elementum lacus nunc, et rhoncus enim cursus ac. Nam velit ligula, vestibulum et ullamcorper ac, egestas nec lectus. Aenean dui lacus, blandit quis pellentesque vitae, hendrerit eget justo.
     `,
      images: [
        {
          name: 'example',
          url: './local/image',
        },
        {
          name: 'example',
          url: './local/image',
        },
        {
          name: 'example',
          url: './local/image',
        },
        {
          name: 'example',
          url: './local/image',
        },
      ],
    },
  ],
}

function EtablissementPage() {
  const { palette } = useTheme()
  const { name, description, suits } = etab
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
