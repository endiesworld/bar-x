import React from "react";
import { connect } from "react-redux";
import FooterComponent from "../../footerComponent/footer.component";

import {
  AboutPageParent,
  BarOwnerImage,
  BarOwnerIntro,
  Jar,
  OwnerHeader,
  BarOwner,
  BarOwnerSolutio,
  ClickHereToBegin,
  ImageAndTextHolder,
  MerryMenImage,
  MerryMenIntro,
  AboutPage,
} from "../aboutComponent.style";

function DesktopAboutComponent({ deviceType }) {
  return (
    <AboutPage id="about-page" device={deviceType}>
      <AboutPageParent device={deviceType}>
        <ImageAndTextHolder device={deviceType}>
          <BarOwnerImage />
          <BarOwnerIntro device={deviceType}>
            <OwnerHeader device={deviceType}>
              <BarOwner>Bar Owners</BarOwner>
              <Jar />
            </OwnerHeader>
            <BarOwnerSolutio>
              Bar-X provide bars with automated inventory management solution,
              publish and update menue list to the world, serve customers
              conviniently, and process payment with ease.
            </BarOwnerSolutio>
            {deviceType !== "mobile" ? (
              <ClickHereToBegin>Click here to begin</ClickHereToBegin>
            ) : (
              ""
            )}
          </BarOwnerIntro>
        </ImageAndTextHolder>
        <ImageAndTextHolder device={deviceType}>
          <MerryMenImage />
          <MerryMenIntro device={deviceType}>
            <OwnerHeader device={deviceType}>
              <BarOwner>Merry men</BarOwner>
              <Jar />
            </OwnerHeader>
            <BarOwnerSolutio>
              Bar-X provide bars with automated inventory management solution,
              publish and update menue list to the world, serve customers
              conviniently, and process payment with ease.
            </BarOwnerSolutio>
            {deviceType !== "mobile" ? (
              <ClickHereToBegin>Click here to begin</ClickHereToBegin>
            ) : (
              ""
            )}
          </MerryMenIntro>
        </ImageAndTextHolder>
      </AboutPageParent>
      <FooterComponent />
    </AboutPage>
  );
}

const mapStateToProps = (state) => {
  const { deviceType } = state.deviceType;
  return { deviceType };
};

export default connect(mapStateToProps)(DesktopAboutComponent);
