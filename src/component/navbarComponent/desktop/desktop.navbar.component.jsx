import React from "react";

import { connect } from "react-redux";

import ButtonComponent from "../../registerButton/registerButton.component";
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
        <Buttonholder device={deviceType} to="/signup">
          <ButtonComponent text="Register your Business" />
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
