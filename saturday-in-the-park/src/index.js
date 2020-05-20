import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router} from "react-router-dom"
import AppViews from "../src/Appviews"

ReactDOM.render(
  <Router>
    <>
     <AppViews />
    </>
  </Router>, 
  document.getElementById('root')
)


