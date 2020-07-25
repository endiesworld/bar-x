import React from "react";
import { FooterHolder, CopyRightIcon, CopyRightText } from "./footer.style";

function FooterComponent(props) {
  return (
    <div id="footer">
      <FooterHolder>
        <CopyRightIcon color={props.iconColor} />
        <CopyRightText color={props.textColor}>
          2020 Bar-X all right reserved.
        </CopyRightText>
      </FooterHolder>
    </div>
  );
}

export default FooterComponent;
