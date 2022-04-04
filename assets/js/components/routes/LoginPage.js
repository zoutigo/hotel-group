import { List, ListItem, Typography } from '@mui/material'
import { useTheme } from '@mui/styles'
import React, { useEffect } from 'react'
import { useSnackbar } from 'notistack'
import { useHistory, useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Cookies from 'js-cookie'
import StyledForm from '../customs/StyledForm'
import StyledPage from '../customs/StyledPage'
import StyledSection from '../customs/StyledSection'
import TextInput from '../form/TextInput'
import useMutate from '../hook/useMutate'
import { apiLogin } from '../utils/api'
import getError from '../utils/getError'
import useAppContext from '../hook/useAppContext'
import useStyles from '../../style'
import ButtonPrimary from '../customs/ButtonPrimary'
import Bread from '../customs/Bread'
import PageTitle from '../customs/PageTitle'
import StyledNavLink from '../customs/StyledNavLink'

function LoginPage() {
  const location = useLocation()
  const classes = useStyles()
  const { palette } = useTheme()
  const history = useHistory()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const { dispatch, state } = useAppContext()
  const { userInfo } = state

  const queryKey = ['login']

  const { mutateAsync, isMutating } = useMutate(queryKey, apiLogin)
  const { control, handleSubmit } = useForm({
    mode: 'onChange',
  })

  const onSubmit = async (datas) => {
    closeSnackbar()
    try {
      await mutateAsync(datas).then((response) => {
        if (response && response.status === 200) {
          dispatch({ type: 'USER_LOGIN', payload: response.data })
          Cookies.set('userInfo', JSON.stringify(response.data))
          const { from } = location.state || { from: { pathname: '/' } }
          history.replace(from)
        }
      })
    } catch (err) {
      enqueueSnackbar(getError(err), { variant: 'error' })
    }
  }

  useEffect(() => {
    if (userInfo) {
      history.push('/')
    }
  }, [])

  return (
    <StyledPage>
      <StyledSection background={palette.white.main}>
        <Bread title="login" />
        <PageTitle>Connectez vous</PageTitle>

        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <List className={classes.formList}>
            <ListItem className="field">
              <TextInput
                control={control}
                name="email"
                label="Email"
                defaultValue=""
                variant="filled"
                example=""
                rules={{
                  required: "le nom de l'album est obligatoire",
                  minLength: {
                    value: 2,
                    message:
                      "le nom de l'album doit avoir 2 caractères au moins",
                  },
                  maxLength: {
                    value: 30,
                    message:
                      "le nom de l'album doit avoir 30 caractères au moins",
                  },
                }}
              />
            </ListItem>
            <ListItem>
              <TextInput
                control={control}
                name="password"
                label="Mot de pass"
                defaultValue=""
                variant="filled"
                example=""
                rules={{
                  required: "le nom de l'album est obligatoire",
                  minLength: {
                    value: 2,
                    message: '',
                  },
                  maxLength: {
                    value: 30,
                    message:
                      "le nom de l'album doit avoir 30 caractères au moins",
                  },
                }}
              />
            </ListItem>
            <ListItem>
              <ButtonPrimary disabled={isMutating}>Se Connecter</ButtonPrimary>
            </ListItem>
            <ListItem>
              <Typography variant="body1">Pas encore de compte ? </Typography>
              &nbsp;&nbsp;&nbsp;
              <StyledNavLink
                to={{
                  pathname: '/register',
                  from: pathname,
                }}
              >
                Inscrivez vous
              </StyledNavLink>
            </ListItem>
          </List>
        </StyledForm>
      </StyledSection>
    </StyledPage>
  )
}

export default LoginPage
