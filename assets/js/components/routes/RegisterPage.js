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
import { apiRegister } from '../utils/api'
import getError from '../utils/getError'
import useAppContext from '../hook/useAppContext'
import useStyles from '../../style'
import ButtonPrimary from '../customs/ButtonPrimary'
import Bread from '../customs/Bread'
import PageTitle from '../customs/PageTitle'

function RegisterPage() {
  const location = useLocation()
  const classes = useStyles()
  const { palette } = useTheme()
  const history = useHistory()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const { dispatch, state } = useAppContext()
  const { userInfo } = state

  const queryKey = ['register']

  const { mutateAsync, isMutating } = useMutate(queryKey, apiRegister)
  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    formState: { isSubmitting },
  } = useForm({
    mode: 'onChange',
  })

  const onSubmit = async (datas) => {
    closeSnackbar()
    try {
      await mutateAsync(datas).then((response) => {
        if (response && response.status === 201) {
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
        <Bread title="inscription" />
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
                  required: 'le mot de pass est obligatoire',
                  minLength: {
                    value: 2,
                    message: 'minimum deux caractères',
                  },
                  maxLength: {
                    value: 30,
                    message: 'maximum 8 caractères',
                  },
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/,
                    message:
                      'au moins 8 caractères, dont 1 majuscule, 1 minuscule et un chiffre',
                  },
                }}
              />
            </ListItem>
            <ListItem>
              <TextInput
                control={control}
                name="passwordConfirm"
                label="Confirmer le mot de pass"
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

                  validate: {
                    matches: (value) => {
                      const { password } = getValues()
                      return (
                        password === value ||
                        'les mots de pass ne sont pas identiques'
                      )
                    },
                  },
                }}
              />
            </ListItem>
            <ListItem>
              <ButtonPrimary disabled={isMutating || isSubmitting}>
                Se Connecter
              </ButtonPrimary>
            </ListItem>
          </List>
        </StyledForm>
      </StyledSection>
    </StyledPage>
  )
}

export default RegisterPage
