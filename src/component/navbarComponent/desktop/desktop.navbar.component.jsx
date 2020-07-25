import React from "react";

import { connect } from "react-redux";

import SigninAndRegister from "../../signinAndRegisterLinkComponent/signinAndRegister.component";

import {
  Navbar,
  Xlogo,
  NavbarLogoHolder,
  Links,
  Buttonholder,
} from "../navbarComponent.style";

function DesktopNavbar({ deviceType }) {
  return (
    <div>
      <Navbar>
        <NavbarLogoHolder>
          <Links to="home-page" smooth={true} duration={500}>
            <Xlogo />
          </Links>
        </NavbarLogoHolder>
        <Buttonholder>
          <SigninAndRegister />
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
