import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./pages/businessOwner/dashBoard/dashBoard.page";

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
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/dashboard/*" element={<DashBoard />} />
      </Routes>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    mobileView: () => dispatch(loadMobileView()),
    desktopView: () => dispatch(loadDesktopView()),
  };
};

export default connect(null, mapDispatchToProps)(App);
