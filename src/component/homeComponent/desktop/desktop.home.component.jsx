import React from "react";

import { connect } from "react-redux";

import ButtonComponent from "../../registerButton/registerButton.component";
import SigninAndRegister from "../../signinAndRegisterLinkComponent/signinAndRegister.component";

import WhatWeDo from "../../whatWeDo/whatWedo.component";

import {
  HomePageBackground,
  HomePageParentDiv,
  Links,
  ContentHolder,
  WriteBar,
  AboutBarx,
  XLogo,
  BusinessOwner,
  Barx,
  AboutTheCompany,
  Buttonholder,
  MerryMenHolder,
  Jar,
  OwnerHeader,
  BarOwner,
  BarOwnerSolutio,
  BusinessOwnerAndMerryMen,
} from "../home.component.style";

function DesktopHomeComponent({ deviceType }) {
  return (
    <div id="home-page">
      <HomePageParentDiv>
        <HomePageBackground>
          <ContentHolder device={deviceType}>
            <AboutBarx device={deviceType}>
              <Barx>
                <WriteBar> Bar- </WriteBar>
                <XLogo />
                <WriteBar>Excellence in Service</WriteBar>
              </Barx>
              <AboutTheCompany>
                <WhatWeDo />
                {deviceType !== "mobile" && (
                  <Buttonholder>
                    <SigninAndRegister color="#ffba00" />
                  </Buttonholder>
                )}
              </AboutTheCompany>
            </AboutBarx>
            <BusinessOwnerAndMerryMen device={deviceType}>
              <BusinessOwner device={deviceType}>
                <OwnerHeader device={deviceType}>
                  <BarOwner> Dear Bar Owner</BarOwner>
                  <Jar />
                </OwnerHeader>
                <BarOwnerSolutio>
                  {" "}
                  Providing consumer xperience is priority, but with managing
                  inventory becomes a huge task
                </BarOwnerSolutio>
              </BusinessOwner>
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
            </BusinessOwnerAndMerryMen>
          </ContentHolder>
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
