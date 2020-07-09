import React from "react";

import { connect } from "react-redux";

import ButtonComponent from "../../registerButton/registerButton.component";
import WhatWeDo from "../../whatWeDo/whatWedo.component";

import {
  HomePageBackground,
  HomePageParentDiv,
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
  Buttonholder,
  Service,
  MerryMenHolder,
  BeerMug,
  Jar,
  OwnerHeader,
  BarOwner,
  BarOwnerSolutio,
} from "../home.component.style";

function DesktopHomeComponent({ deviceType }) {
  return (
    <div id="home-page">
      <HomePageParentDiv>
        <HomePageBackground>
          <BarxAndBeerMugHolder device={deviceType}>
            <AboutBarxHolder device={deviceType}>
              <AboutBarx>
                <Barx>
                  <WriteBar> Bar </WriteBar>
                  <XLogo />
                  <Service>Excellence in Service</Service>
                </Barx>
                <AboutTheCompany>
                  <WhatWeDo />
                  {deviceType !== "mobile" && (
                    <Buttonholder to="/signup">
                      <ButtonComponent
                        height="3em"
                        width="14em"
                        text="Register your business"
                      />
                    </Buttonholder>
                  )}
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
            <BeerMugHolder device={deviceType}>
              <BeerMug device={deviceType} />
              <MerryMenHolder device={deviceType}>
                <OwnerHeader device={deviceType}>
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
            <ButtonComponent text="Our Solutions" />
          </Links>
        </HomePageBackground>
      </HomePageParentDiv>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { deviceType } = state.deviceType;
  return { deviceType };
};

export default connect(mapStateToProps)(DesktopHomeComponent);
