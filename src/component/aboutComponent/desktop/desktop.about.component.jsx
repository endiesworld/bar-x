import React from "react";
import { connect } from "react-redux";

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
} from "../aboutComponent.style";

function DesktopAboutComponent({ deviceType }) {
  return (
    <div>
      <AboutPageParent id="about-page" device={deviceType}>
        <ImageAndTextHolder device={deviceType}>
          <BarOwnerImage />
          <BarOwnerIntro>
            <OwnerHeader>
              <BarOwner>Bar Owners</BarOwner>
              <Jar />
            </OwnerHeader>
            <BarOwnerSolutio>
              Bar X provide bars with automated inventory management solution,
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
          <MerryMenIntro>
            <OwnerHeader>
              <BarOwner>Merry men</BarOwner>
              <Jar />
            </OwnerHeader>
            <BarOwnerSolutio>
              Bar X provide bars with automated inventory management solution,
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
    </div>
  );
}

const mapStateToProps = (state) => {
  const { deviceType } = state.deviceType;
  return { deviceType };
};

export default connect(mapStateToProps)(DesktopAboutComponent);
