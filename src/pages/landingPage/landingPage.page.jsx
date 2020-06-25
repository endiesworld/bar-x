import React from 'react' ;
import NavbarPage from './navbar/navbar.page' ; 
import HomePage from './homePage/homePage' ;
import AboutPage from './aboutUsPage/aboutPage' ;

function LandingPage() {
    return (
        <div>
            <NavbarPage />
            <HomePage />
            <AboutPage />

        </div>
    )
}

export default LandingPage
