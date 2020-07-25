import React from "react";

import { connect } from "react-redux";
import Footer from "../../component/footerComponent/footer.component";

import SigninComponent from "../../component/formComponent/signinComponent/signin.component";

import {
  SignUpParent,
  WhatWeDoSection,
  FormSection,
  BeerMug,
} from "./signin.page.style";

function SigninPage({ deviceType }) {
  return (
    <div id="signin-page">
      <SignUpParent device={deviceType}>
        <WhatWeDoSection device={deviceType}>
          <BeerMug />
        </WhatWeDoSection>
        <FormSection device={deviceType}>
          <SigninComponent />
          <Footer iconColor="#291563" textColor="#291563" />
        </FormSection>
      </SignUpParent>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { deviceType } = state.deviceType;
  return { deviceType };
};

export default connect(mapStateToProps)(SigninPage);
