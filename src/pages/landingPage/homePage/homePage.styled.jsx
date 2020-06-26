import styled from 'styled-components' ;
import {Link} from 'react-scroll' ;
import  {ReactComponent as Mug} from '../../../assets/beer-mug.svg';
import {ReactComponent as X} from '../../../assets/page-barx.svg';
import jar from '../../../assets/jar.png' ;

export const HomePageParentDiv = styled.div`
    width: 100vw ;
    height: 100vh ;
     
`

export const HomePageBackground = styled.div`
   
    background-color:  #291563 ; 
    width: 100vw ;
    height: 100% ;
    display: flex ;
    flex-direction: column ;
    align-items: center ;
`
export const BarxAndBeerMugHolder = styled.div`
    width: 100vw ;
    height: 95% ;
    display: flex ;
    justify-content: space-between ;
`
export const AboutBarxHolder = styled.div`
   
    width: 50% ;
    height: 100% ;
    display: flex ;
    flex-direction: column ;
    justify-content: space-between ;
`
export const AboutBarx = styled.div`
    position: relative ;
    top: 15% ;
    width: 70% ;
    height: 55% ;
    display: flex ;
    flex-direction: column ;
    
`

export const Barx = styled.div`
     
    margin-top: 3% ;
    width: 70% ;
    height: 15% ;
    display: flex ;
    margin-left: 10% ;
    align-items: center ;
`
export const XLogo = styled(X)`
fill: currentColor;

`
export const Service = styled.p`
    margin-left: 5%;
    color: #FFFFFF ;
`

export const AboutTheCompany = styled.div`
    position: relative ;
    bottom: 5% ;
    width: 80% ;
    height: 45% ;
    margin-left: 10% ;
    
`
export const AboutBarxWriteUp = styled.h2`
    text-align: left ;
    font-family: Regular  Montserrat;
    color: #FFFFFF;
`
export const Experience = styled.span`
    font-size: 0.7rem ;
    color: #FFBA00;
`
export const Break = styled.br`
`
export const RegisterButton = styled.button`
    position: relative ;
    bottom: 25% ;
    height: 10%;
    width: 40% ;
    background: #FFFFFF ;
    border: 1px solid #291563;
    border-radius: 4px;
    margin-left: 10% ; 
    display: flex ;
    align-items: center ;
`;

export const ButtonText = styled.h2`
     color: #291563;
     font-family: Regular  Montserrat;
     font-size: 0.6rem ;
     width: 100% ;
    
`

export const BeerMugHolder = styled.div`
    
    display: flex ;
    flex-direction: column ;
    justify-content: space-between ;
    width: 50% ;
    height: 100% ;
`

export const BeerMug = styled(Mug)`
    position: relative ;
    height: 80% ;
    left: 38% ;
    top: 15% ;
    opacity: 1 ;
    mix-blend-mode: normal;
   
`

// export const BeerMug = styled.div`
//      background: transparent url('../../../assets/beerMug.png') 0% 0% no-repeat padding-box;
// opacity: 1;
//    mix-blend-mode: normal;
// `

export const BusinessOwner = styled.div`
    position: relative ;
    left: 40% ;
    width: 50% ;
    height: 20% ;
`;
export const MerryMenHolder = styled(BusinessOwner)`
    left: -8% ;
`;

export const Links = styled(Link)`
    margin-right: 15% ;
    height: 5%;
    width: 10% ;
    text-decoration: none;
    cursor: pointer;
`;

export const SolutionButton = styled.button`
    height: 100%;
    width: 100% ;
    background: #FFFFFF ;
    border: 1px solid #291563;
    border-radius: 4px;
   
    font-family: Regular Montserrat;
    
    display: flex ;
    align-items: center ;
`
export const OwnerHeader = styled.div`
    display: flex ;
    justify-content: space-around ;
    align-items: center ;
    background-color: #FFBA00 ; 
    width: 70% ;
    height: 35% ;
`;

export const BarOwner = styled.h2`
    text-align: left;
    font-family: regular  Montserrat;
    color: #291563;    
`;

export const Jar = styled.div`
    background-image: url(${jar});
    width: 10% ;
    height: 90% ;
    background-repeat: no-repeat ;
    margin-top: 2% ;
    margin-right: 5% ;
`;

export const BarOwnerSolutio = styled.p`
    text-align: left;
    font-family: Semi Bold  Montserrat;
    color: #fff;
`;