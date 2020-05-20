import React, {useState, useEffect} from "react";
import {Route, Redirect, Router} from "react-router-dom";
import Home from "./Home"

const AppViews = (props) => {
    return (
    <>
    <Route exact path = "/" render={(props) => <Home />}/>
    </>

    )

}

export default AppViews