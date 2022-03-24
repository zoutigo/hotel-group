import React from "react"
import { render } from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import "./styles/app.css"
import Home from "./js/components/Home"

render(
  <Router>
    <Home />
  </Router>,
  document.getElementById("root")
)
