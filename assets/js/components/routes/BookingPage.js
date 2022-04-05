import {
  List,
  ListItem,
  Typography,
  TextField,
  MenuItem,
  Stack,
  Box,
} from '@mui/material'
import Select from 'react-select'
import MobileDateRangePicker from '@mui/lab/MobileDateRangePicker'
import DesktopDateRangePicker from '@mui/lab/DesktopDateRangePicker'
import { useTheme } from '@mui/styles'
import React, { useCallback, useEffect } from 'react'
import moment from 'moment'
import { useSnackbar } from 'notistack'
import { useHistory, useLocation } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
import Cookies from 'js-cookie'
import StyledForm from '../customs/StyledForm'
import StyledPage from '../customs/StyledPage'
import StyledSection from '../customs/StyledSection'
import TextInput from '../form/TextInput'
import useMutate from '../hook/useMutate'
import { apiBookingCreate } from '../utils/api'
import getError from '../utils/getError'
import useAppContext from '../hook/useAppContext'
import useStyles from '../../style'
import ButtonPrimary from '../customs/ButtonPrimary'
import Bread from '../customs/Bread'
import PageTitle from '../customs/PageTitle'
import StyledNavLink from '../customs/StyledNavLink'
import selectStyles from '../constants/selectStyles'
import houses from '../constants/houses'

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
]

function BookingPage() {
  const location = useLocation()
  const classes = useStyles()
  const { palette } = useTheme()
  const history = useHistory()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const { dispatch, state } = useAppContext()
  const { userInfo } = state

  const queryKey = ['booking']

  const { mutateAsync, isMutating } = useMutate(queryKey, apiBookingCreate)
  const {
    control,
    handleSubmit,
    getValues,
    formState: { isSubmitting },
  } = useForm({
    mode: 'onChange',
  })
  const { house: houseId } = getValues()

  const onSubmit = async (datas) => {
    console.log('datas', datas)

    // closeSnackbar()

    // try {
    //   await mutateAsync(datas).then((response) => {
    //     if (response && response.status === 201) {
    //       history.push('/login')
    //     }
    //   })
    // } catch (err) {
    //   enqueueSnackbar(getError(err), { variant: 'error' })
    // }
  }

  const houseOptions = useCallback(() => {
    houses.map(({ name, id }) => ({
      value: id,
      label: name,
    }))
  }, [houses])

  const suitOptions = useCallback(
    houses.filter((house) => house.id === houseId) || [],
    [houseId]
  )

  const initialHouse = useCallback(
    location.state && location.state.suit
      ? { name: location.state.suit.name, value: location.state.suit.id }
      : [],
    [location]
  )
  const initialSuit = useCallback(
    location.state && location.state.house
      ? { name: location.state.house.name, value: location.state.house.id }
      : [],
    [location]
  )

  // useEffect(() => {
  //   if (!userInfo) {
  //     history.push('/login')
  //   }
  // }, [])

  return (
    <StyledPage>
      <StyledSection background={palette.white.main}>
        <Bread title="reservation" />
        <PageTitle>Reservez votre suite</PageTitle>

        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <List className={classes.formList}>
            <ListItem>
              <Controller
                control={control}
                name="house"
                defaultValue={initialHouse}
                render={({ field }) => (
                  <TextField
                    {...field}
                    sx={{ m: 1, width: '100%' }}
                    id="filled-select-currency"
                    select
                    label="Etablissement"
                    helperText="Please select your currency"
                    variant="filled"
                  >
                    {houses.map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
            </ListItem>
            <ListItem>
              <Controller
                control={control}
                name="suit"
                defaultValue={initialSuit}
                render={({ field }) => (
                  <TextField
                    {...field}
                    sx={{ m: 1, width: '100%' }}
                    id="filled-select-currency"
                    select
                    label="Etablissement"
                    helperText="Please select your currency"
                    variant="filled"
                  >
                    {suitOptions.map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
            </ListItem>
            {/* <ListItem>
              <Controller
                control={control}
                name="house"
                defaultValue={initialHouse}
                // rules={{
                //   required: 'selectionner un role au moins',
                // }}
                render={({ field }) => (
                  <Select
                    {...field}
                    placeholder="Choisir un établissement"
                    inputRef={field.ref}
                    options={houseOptions()}
                    isMulti
                    styles={selectStyles}
                    defaultOptions
                    maxMenuHeight={200}
                  />
                )}
              />
            </ListItem> */}
            <ListItem className={classes.hideUpMd}>
              <Controller
                name="startdate"
                control={control}
                defaultValue={[new Date()]}
                render={({ field }) => (
                  <MobileDateRangePicker
                    {...field}
                    startText="Date de debut"
                    minDate={moment(new Date())}
                    onChange={(newValue) => {
                      field.onChange(newValue)
                    }}
                    renderInput={(startProps, endProps) => (
                      <>
                        <TextField
                          variant="filled"
                          {...startProps}
                          label="Date de début"
                        />
                        <Box sx={{ mx: 2 }}> au </Box>
                        <TextField
                          variant="filled"
                          {...endProps}
                          label="Date de fin"
                        />
                      </>
                    )}
                  />
                )}
              />
            </ListItem>
            <ListItem className={classes.hideDownMd}>
              <Stack spacing={3}>
                <Controller
                  name="startdate"
                  control={control}
                  defaultValue={[new Date()]}
                  render={({ field }) => (
                    <DesktopDateRangePicker
                      startText="Desktop start"
                      {...field}
                      onChange={(newValue) => {
                        field.onChange(newValue)
                      }}
                      renderInput={(startProps, endProps) => (
                        <>
                          <TextField
                            variant="filled"
                            {...startProps}
                            label="Date de début"
                          />
                          <Box sx={{ mx: 2 }}> au </Box>
                          <TextField
                            variant="filled"
                            {...endProps}
                            label="Date de fin"
                          />
                        </>
                      )}
                    />
                  )}
                />
              </Stack>
            </ListItem>

            <ListItem>
              <ButtonPrimary
                type="submit"
                disabled={isMutating || isSubmitting}
              >
                Se Connecter
              </ButtonPrimary>
            </ListItem>
          </List>
        </StyledForm>
      </StyledSection>
    </StyledPage>
  )
}

export default BookingPage
