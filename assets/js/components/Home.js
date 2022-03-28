import React from "react"
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"
// import { styled } from "@material-ui/styles"
import { Container } from "@mui/material"
import { styled } from "@mui/styles"

const StyledHome = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.white.main,
  minWidth: "300px",
  [theme.breakpoints.up("md")]: {
    padding: "0rem 17%",
  },
  padding: "0rem 0rem",
}))

const Home = () => {
  // const theme = useTheme()
  // const isSmallScreen = !useMediaQuery(theme.breakpoints.down("lg"))
  return (
    <StyledHome>
      <Header />
      <Body />
      <Footer />
    </StyledHome>
  )
}

export default Home
