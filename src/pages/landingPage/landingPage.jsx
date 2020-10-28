import React from "react";

import NavbarPage from "./navbar/navbar.page";
import HomePage from "./homePage/home.page";
import AboutPage from "./aboutUsPage/about.page";
import { LandingPageParentDiv } from "./landingPage.styled";

function LandingPage() {
  return (
    <LandingPageParentDiv id=" landing-page">
      <NavbarPage />
      <HomePage />
      <AboutPage />
    </LandingPageParentDiv>
  );
}

export default LandingPage;
