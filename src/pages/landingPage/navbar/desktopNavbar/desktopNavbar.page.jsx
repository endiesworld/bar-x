import React from 'react' ;

import { Navbar, Xlogo, Button, ButtonText, NavbarLogoHolder, Links} from './desktopNavbar.style' ;


function DesktopNavbar() {
    return (
        <div>
            <Navbar>
                < NavbarLogoHolder> 
                <Links  to='home-page' smooth={true} duration={500} >
                        <Xlogo />
                    </Links>
                
                </NavbarLogoHolder>
                
                <Button > <ButtonText>Register your Business</ButtonText> </Button>
            </Navbar>
            
        </div>
    )
}

export default DesktopNavbar
