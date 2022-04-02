import { createStyles, makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) =>
  createStyles({
    page: {
      paddingTop: '4.5rem',
      '& >:first-child': {
        paddingTop: '5.5rem !important',
      },
    },
    section: {
      paddingBottom: '4rem',
      paddingTop: '1rem',
      [theme.breakpoints.up('lg')]: {
        paddingLeft: '9.5%',
        paddingRight: '9.5%',
      },
    },
  })
)

export default useStyles
