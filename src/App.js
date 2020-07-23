import React, { useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { connect } from "react-redux";

import {
  loadMobileView,
  loadDesktopView,
} from "./redux/deviceType/deviceType.action";

import LandingPage from "./pages/landingPage/landingPage";
import SignUpPage from "./pages/signUpPage/signUp.page";
import SigninPage from "./pages/signinPage/signin.page";
import "./App.css";

function App({ desktopView, mobileView }) {
  let screenSize = window.innerWidth;
  screenSize > 645 ? desktopView() : mobileView();

  const changeDeviceType = (newScreenSize) => {
    screenSize = newScreenSize;
    newScreenSize > 645 ? desktopView() : mobileView();
  };

  const checkScreenSize = () => {
    if (
      !(
        (window.innerWidth > 645 && screenSize > 645) ||
        (window.innerWidth < 645 && screenSize < 645)
      )
    ) {
      changeDeviceType(window.innerWidth);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  });

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact={true} path="/">
            <LandingPage />
          </Route>
          <Route exact={true} path="/signup">
            <SignUpPage />
          </Route>
          <Route exact={true} path="/signin">
            <SigninPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    mobileView: () => dispatch(loadMobileView()),
    desktopView: () => dispatch(loadDesktopView()),
  };
};

export default connect(null, mapDispatchToProps)(App);
