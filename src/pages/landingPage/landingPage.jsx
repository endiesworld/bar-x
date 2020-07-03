import React from "react";
import NavbarPage from "./navbar/navbar.page";
import HomePage from "./homePage/home.page";
import AboutPage from "./aboutUsPage/about.page";
import ContactPage from "./contactPage/contact.page";

function LandingPage() {
  return (
    <div>
      <NavbarPage />
      <HomePage />
      <AboutPage />
      <ContactPage />
    </div>
  );
}

export default LandingPage;
