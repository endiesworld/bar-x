import styled from 'styled-components' ;
import {ReactComponent as Xlogo} from '../../../../assets/navbar-barx.svg'

export const Navbar = styled.nav`
    position: fixed ;
    display: flex ;
    align-items: center ;
    justify-content: space-between;
    width: 100%;
    height: 7vh;
    background-color: #FFFFFF;
    border-bottom: 5px solid #e8eaf6;
    z-index: 1 ;
    opacity: 1;
`
export const NavbarLogoHolder = styled.div`

z-index: 1 ;
    height: 80% ;
    margin-left: 3% ;
    opacity: 1 ;

`
export const NavbarLogo = styled(Xlogo)`
fill: currentColor;
  
`

export const Button = styled.button`
    height: 80%;
    width: 13% ;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #291563;
    border-radius: 4px;
    opacity: 1;
    margin-right: 3% ;
    font-family: Regular 16px/19px Montserrat;
    color: #291563;

`