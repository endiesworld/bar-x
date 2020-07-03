import React from "react";
import {
  HomePageBackground,
  HomePageParentDiv,
  SolutionButton,
  Links,
  BarxAndBeerMugHolder,
  WriteBar,
  AboutBarxHolder,
  BeerMugHolder,
  AboutBarx,
  XLogo,
  BusinessOwner,
  Barx,
  AboutTheCompany,
  ButtonText,
  RegisterButton,
  AboutBarxWriteUp,
  Service,
  Experience,
  MerryMenHolder,
  BeerMug,
  Break,
  Jar,
  OwnerHeader,
  BarOwner,
  BarOwnerSolutio,
} from "../home.component.style";

function DesktopHomeComponent() {
  return (
    <div id="home-page">
      <HomePageParentDiv>
        <HomePageBackground>
          <BarxAndBeerMugHolder>
            <AboutBarxHolder>
              <AboutBarx>
                <Barx>
                  <WriteBar> Bar </WriteBar>
                  <XLogo />
                  <Service>Excellence in Service</Service>
                </Barx>
                <AboutTheCompany>
                  <AboutBarxWriteUp>
                    We are a company aimed at <Break />
                    improving your Bar-<Experience>Xperience</Experience>
                    <Break />
                    as both a business and consumer
                  </AboutBarxWriteUp>
                  <RegisterButton>
                    <ButtonText>Register your business</ButtonText>
                  </RegisterButton>
                </AboutTheCompany>
              </AboutBarx>
              <BusinessOwner>
                <OwnerHeader>
                  <BarOwner> Dear Bar Owner</BarOwner>
                  <Jar />
                </OwnerHeader>
                <BarOwnerSolutio>
                  {" "}
                  Providing consumer xperience is priority, but with managing
                  inventory becomes a huge task
                </BarOwnerSolutio>
              </BusinessOwner>
            </AboutBarxHolder>
            <BeerMugHolder>
              <BeerMug />
              <MerryMenHolder>
                <OwnerHeader>
                  <BarOwner> Dear Merry Men</BarOwner>
                  <Jar />
                </OwnerHeader>
                <BarOwnerSolutio>
                  We know all you want is to merry, but with calculating your
                  bills after, becomes a huge task
                </BarOwnerSolutio>
              </MerryMenHolder>
            </BeerMugHolder>
          </BarxAndBeerMugHolder>
          <Links to="about-page" smooth={true} duration={500}>
            <SolutionButton>
              <ButtonText>Our Solutions</ButtonText>
            </SolutionButton>
          </Links>
        </HomePageBackground>
      </HomePageParentDiv>
    </div>
  );
}

export default DesktopHomeComponent;
