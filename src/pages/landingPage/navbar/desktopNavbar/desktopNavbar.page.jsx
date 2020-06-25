import React from 'react' ;
import logo from '../../../../assets/Xlogo.png' ;
import {Navbar, Button, NavbarLogo, NavbarLogoHolder} from './desktopNavbar.style' ;


function DesktopNavbar() {
    return (
        <div>
            <Navbar>
                < NavbarLogoHolder> 
                { //<NavbarLogo/>
                }
                <img src ={logo} alt=""  />
                </NavbarLogoHolder>
                
                <Button > Register your Business</Button>
            </Navbar>
            
        </div>
    )
}

export default DesktopNavbar
