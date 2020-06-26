import styled from 'styled-components' ;
import {Link} from 'react-scroll' ;
import xlogo from '../../../../assets/Xlogo.png';
//import {ReactComponent as Xlogo} from '../../../../assets/navbar-barx.svg'

export const Navbar = styled.nav`
    position: fixed ;
    display: flex ;
    align-items: center ;
    justify-content: space-between;
    width: 100%;
    height: 10vh;
    background-color: #FFFFFF;
    border-bottom: 5px solid #e8eaf6;
    z-index: 1 ;
    opacity: 1;
` ;
export const NavbarLogoHolder = styled.div`

    width: 8% ;
    height: 80% ;
    margin-left: 3% ;
    opacity: 1 ;
`;

export const Links = styled(Link)`
    height: 100%;
    width: 100% ;
    text-decoration: none;
    cursor: pointer;
`;


export const Xlogo = styled.div`
background-image: url(${xlogo});
width: 100% ;
height: 90% ;
background-repeat: no-repeat ;
margin-top: 2% ;
`;


export const Button = styled.button`
    height: 70%;
    width: 13% ;
    background: #FFFFFF ;
    border: 1px solid #291563;
    border-radius: 4px;
    margin-right: 3% ;
    display: flex ;
    align-items: center ;
` ;
export const ButtonText = styled.h2`
     color: #291563;
     font-family: Regular  Montserrat;
     font-size: 0.6rem ;
     width: 100% ;
` ;