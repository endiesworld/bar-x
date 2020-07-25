import React from "react";

import { connect } from "react-redux";
import WhatWeDo from "../../component/whatWeDo/whatWedo.component";
import BarWithXLogo from "../../component/barWithXLogo/barWithXLogo.component";
import Footer from "../../component/footerComponent/footer.component";

import {
  SignUpParent,
  WhatWeDoSection,
  FormSection,
  BarXholder,
} from "./signUp.page.style";

import SignUpComponent from "../../component/formComponent/signupComponent/signup.component";

function SignUpPage({ deviceType }) {
  return (
    <div id="signup-page">
      <SignUpParent device={deviceType}>
        <WhatWeDoSection device={deviceType}>
          <BarXholder>
            <BarWithXLogo />
          </BarXholder>
          <WhatWeDo />
        </WhatWeDoSection>
        <FormSection device={deviceType}>
          <SignUpComponent />
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

export default connect(mapStateToProps)(SignUpPage);
