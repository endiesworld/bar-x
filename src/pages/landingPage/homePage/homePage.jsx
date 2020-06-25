import React from 'react'
import pics from '../../../assets/beerMug.png' ;
import Xtext from '../../../assets/Xtext.png' ;
import jar from '../../../assets/jar.png' ;
import {HomePageBackground, HomePageParentDiv, 
        SolutionButton, Links, BarxAndBeerMugHolder, 
        AboutBarxHolder, BeerMugHolder, AboutBarx ,
        BusinessOwner, Barx , AboutTheCompany,
        RegisterButton, AboutBarxWriteUp, XLogo, Service,
        Experience, MerryMenHolder, BeerMug, Break, Jar,
        OwnerHeader, BarOwner, BarOwnerSolutio} from './homePage.styled'

function HomePage() {
    return (
        
        <div>
            < HomePageParentDiv >
                <HomePageBackground >
                    < BarxAndBeerMugHolder >
                        < AboutBarxHolder >
                            < AboutBarx >
                                <Barx >
                                    <AboutBarxWriteUp > Bar </AboutBarxWriteUp>
                                    {//<XLogo />
                                        }
                                     <img src ={Xtext} alt=""  />
                                    <Service> Excelence in Service</Service>
                                </Barx>
                                < AboutTheCompany >
                                    <AboutBarxWriteUp > 
                                        We are a company aimed at improving your Bar-<Experience>Xperience </Experience>
                                        <Break />as both a business and consumer 
                                    </AboutBarxWriteUp>
                                </AboutTheCompany>
                                < RegisterButton >Register your business</RegisterButton>
                            </AboutBarx>
                            < BusinessOwner >
                                <OwnerHeader>
                                    <BarOwner> Dear Bar Owner 
                                    </BarOwner>
                                    <Jar />
                                </OwnerHeader>
                                <BarOwnerSolutio> Providing consumer xperience is priority, but with managing inventory becomes a huge task</BarOwnerSolutio>
                            </BusinessOwner>
                        </AboutBarxHolder>
                        < BeerMugHolder > 
                            < BeerMug />
                            <MerryMenHolder>
                            <OwnerHeader>
                                    <BarOwner> Dear Merry Men
                                    </BarOwner>
                                    <Jar />
                                </OwnerHeader>
                                <BarOwnerSolutio> We know all you want is to merry, but with calculating your bills after, becomes a huge task</BarOwnerSolutio>
                            
                            </MerryMenHolder>
                        </BeerMugHolder>
                    </BarxAndBeerMugHolder>
                    <Links  to='about-page' smooth={true} duration={500} >
                         < SolutionButton>Our Solutions</SolutionButton> 
                    </Links>
                </HomePageBackground>
                
            </HomePageParentDiv>
            
        </div>
    )
}

export default HomePage
