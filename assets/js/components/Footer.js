import { styled } from "@mui/styles"
import React from "react"

export const StyledFooter = styled("footer")(({ theme }) => ({
  color: theme.palette.black.main,
  minHeight: "5vh",
  background: "purple",
}))

const Footer = () => {
  return <StyledFooter>Footer</StyledFooter>
}

export default Footer
