import React from 'react' ;
import logo from '../../../../assets/Xlogo.png' ;
import {Navbar, Button, NavbarLogoHolder, Links} from './desktopNavbar.style' ;


function DesktopNavbar() {
    return (
        <div>
            <Navbar>
                < NavbarLogoHolder> 
                <Links  to='home-page' smooth={true} duration={500} >
                     <img src ={logo} alt=""  />
                    </Links>
                
                </NavbarLogoHolder>
                
                <Button > Register your Business</Button>
            </Navbar>
            
        </div>
    )
}

export default DesktopNavbar
