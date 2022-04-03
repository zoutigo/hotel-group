import { createStyles, makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) =>
  createStyles({
    page: {
      paddingTop: '3.5rem',
      '& >:first-child': {
        paddingTop: '5.5rem !important',
      },
    },
    section: {
      marginTop: '1rem',
      paddingBottom: '4rem',
      paddingTop: '1rem',
      [theme.breakpoints.up('lg')]: {
        paddingLeft: '9.5%',
        paddingRight: '9.5%',
      },
      [theme.breakpoints.down('lg')]: {
        padding: '0 1rem',
      },
    },
    textJustify: {
      textAlign: 'justify',
    },
    textCenter: {
      textAlign: 'center',
    },
  })
)

export default useStyles
