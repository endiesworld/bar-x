import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./pages/businessOwner/dashBoard/dashBoard.page";

import { connect } from "react-redux";

import {
  loadMobileView,
  loadDesktopView,
  loadTabView,
} from "./redux/deviceType/deviceType.action";

import LandingPage from "./pages/landingPage/landingPage";
import SignUpPage from "./pages/signUpPage/signUp.page";
import SigninPage from "./pages/signinPage/signin.page";
import { checkScreenSize } from "./screenTypes/deviceTypeSelector";
import "./App.css";

function App({ desktopView, mobileView, tabView, deviceType }) {
  checkScreenSize(mobileView, tabView, desktopView, deviceType);

  const checkNewScreenSize = () => {
    checkScreenSize(mobileView, tabView, desktopView, deviceType);
  };
  useEffect(() => {
    window.addEventListener("resize", checkNewScreenSize);
  });

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/dashboard/*" element={<DashBoard />} />
      </Routes>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { deviceType } = state.deviceType;
  return { deviceType };
};

const mapDispatchToProps = (dispatch) => {
  return {
    mobileView: () => dispatch(loadMobileView()),
    desktopView: () => dispatch(loadDesktopView()),
    tabView: () => dispatch(loadTabView()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
