import React from 'react' ;
import NavbarPage from './navbar/navbar.page' ; 
import HomePage from './homePage/homePage' ;
import AboutPage from './aboutUsPage/aboutPage' ;
import ContactPage from './contactPage/contactPage' ;

function LandingPage() {
    return (
        <div>
            <NavbarPage />
            <HomePage />
            <AboutPage />
            <ContactPage />

        </div>
    )
}

export default LandingPage
