import React from "react";

import { connect } from "react-redux";

import SigninAndRegister from "../../signinAndRegisterLinkComponent/signinAndRegister.component";
import BarName from "../../barName/barName.component";

import {
  Navbar,
  Xlogo,
  NavbarLogoHolder,
  Links,
  Buttonholder,
} from "../navbarComponent.style";

import {dashBoardProperties} from "../../dashBoard/dashBoard"

function DesktopNavbar({
  deviceType,
  dashboard,
  color,
  backgroundColor,
  textColor,
}) {

  return (
    <div>
      <Navbar backgroundColor={dashBoardProperties.background}>
        <NavbarLogoHolder>
          <Links to="home-page" smooth={true} duration={500}>
            <Xlogo />
          </Links>
        </NavbarLogoHolder>
        <Buttonholder>
          {" "}
          {dashboard ? (
            <BarName backgroundColor={dashBoardProperties.buttonBackground} textColor={dashBoardProperties.textColor} />
          ) : (
            <SigninAndRegister />
          )}
        </Buttonholder>
      </Navbar>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { deviceType } = state.deviceType;
  return { deviceType };
};

export default connect(mapStateToProps)(DesktopNavbar);
