import React from "react";
import {
  AboutPageParent,
  BusinessOwnerSide,
  BarOwnerImage,
  BarOwnerIntro,
  Jar,
  OwnerHeader,
  BarOwner,
  BarOwnerSolutio,
  ClickHereToBegin,
  CustomerSide,
  MerryMenImage,
  MerryMenIntro,
} from "../aboutComponent.style";

function DesktopAboutComponent() {
  return (
    <div>
      <AboutPageParent id="about-page">
        <BusinessOwnerSide>
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
            <ClickHereToBegin>Click here to begin</ClickHereToBegin>
          </BarOwnerIntro>
        </BusinessOwnerSide>
        <CustomerSide>
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
            <ClickHereToBegin>Click here to begin</ClickHereToBegin>
          </MerryMenIntro>
        </CustomerSide>
      </AboutPageParent>
    </div>
  );
}

export default DesktopAboutComponent;
