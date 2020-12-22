import React, { useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./pages/businessOwner/dashBoard/dashBoard.page";

import { connect } from "react-redux";

import {
  loadMobileView,
  loadDesktopView,
  loadTabView,
} from "./redux/deviceType/deviceType.action";

import {loadUser, loadUserId} from "./redux/user/user.action";

import LandingPage from "./pages/landingPage/landingPage";
import SignUpPage from "./pages/signUpPage/signUp.page";
import SigninPage from "./pages/signinPage/signin.page";
import { checkScreenSize } from "./screenTypes/deviceTypeSelector";
import "./App.css";
import {auth} from "./firebase/firebase.util.store" ;
import {getBarDetails} from "./firebase/newUserProfile" ;

function App({ desktopView, mobileView, tabView, deviceType, barxUser, addUid}) {
  checkScreenSize(mobileView, tabView, desktopView, deviceType);
    useEffect( () => {
     let unsub = auth.onAuthStateChanged( async (user) => {  
       if (user) {  
         addUid(user.uid) ;
        let barDetails =  await getBarDetails(user) ;
        ( barDetails) ? barxUser( barDetails) : barxUser(user) ;
         }
        else {
          barxUser(user) ;
        }
       } )
    return () => {
      unsub() ;
    }
  });
  const checkNewScreenSize = () => {
    checkScreenSize(mobileView, tabView, desktopView, deviceType);
  };
  useEffect(() => {
    window.addEventListener("resize", checkNewScreenSize);
  });

return (
    <div className="app">
      <Routes>
        <Route path="/" render={() => <div>Home</div>}  element={  <LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/dashboard/*" element={ <DashBoard />} />
      </Routes>
    </div>
  );
}
const mapStateToProps = (state) => {
  const { deviceType } = state.deviceType ;
  return { deviceType};
};

const mapDispatchToProps = (dispatch) => {
  return {
    mobileView: () => dispatch(loadMobileView()),
    desktopView: () => dispatch(loadDesktopView()),
    tabView: () => dispatch(loadTabView()),
    barxUser: (user) => dispatch(loadUser(user)),
    addUid: (pushItem) => dispatch(loadUserId(pushItem)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
