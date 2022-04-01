import { Grid, TextField } from '@mui/material'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import ButtonPrimary from '../customs/ButtonPrimary'
import StyledForm from '../customs/StyledForm'

function EtablissementsListForm() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isValid, errors },
  } = useForm({
    mode: 'onChange',
  })

  const onSubmit = async (datas) => {
    console.log(datas)
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Grid item container alignItems="center">
        <Grid item xs={9}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: 'saisissez une adresse mail',
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
                message: 'le format mail est incorrect',
              },
            }}
            render={({ field }) => (
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Adresse mail"
                placeholder="Entrez une adresse email"
                inputProps={{ type: 'email' }}
                error={Boolean(errors.email)}
                helperText={errors.email ? errors.email.message : null}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={3}>
          <ButtonPrimary
            // startIcon={<SearchIcon />}
            fullWidth
            type="submit"
            disabled={isSubmitting}
          >
            Rechercher
          </ButtonPrimary>
        </Grid>
      </Grid>
    </StyledForm>
  )
}

export default EtablissementsListForm
