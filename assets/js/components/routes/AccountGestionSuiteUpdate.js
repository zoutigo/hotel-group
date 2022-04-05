import React from 'react'
import { useTheme } from '@mui/styles'
import StyledSection from '../customs/StyledSection'
import StyledPage from '../customs/StyledPage'
import Bread from '../customs/Bread'
import PageTitle from '../customs/PageTitle'
import StyledForm from '../customs/StyledForm'

function AccountGestionSuiteUpdate() {
  const { palette } = useTheme()
  return (
    <StyledPage>
      <StyledSection background={palette.white.main}>
        <Bread title="login" />
        <PageTitle>AccountAdminHouseCreate vous</PageTitle>
      </StyledSection>
      <StyledForm>Form</StyledForm>
    </StyledPage>
  )
}

export default AccountGestionSuiteUpdate
