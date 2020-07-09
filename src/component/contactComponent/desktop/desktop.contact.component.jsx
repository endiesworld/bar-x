import React from "react";

import FooterComponent from "../../footerComponent/footer.component";

import {
  ContactPageParent,
  ImageAndDetailsHolder,
  ImageHolder,
  MessageHolder,
  Message,
  BarX,
  EmailHolder,
  MessageBox,
  EmailLabel,
  Emailinput,
  TextAreaHolder,
  TextArea,
} from "../contact.component.style";

function DesktopContactComponent() {
  return (
    <div>
      <ContactPageParent>
        <ImageAndDetailsHolder>
          <ImageHolder />
          <MessageHolder>
            <Message>
              You have an idea on how <BarX> Bar-x </BarX> can serve her
              customers better ?
              <br /> Send a message to the family, as you provide your email
              below.
            </Message>
            <MessageBox>
              <EmailHolder>
                <EmailLabel>email</EmailLabel>
                <Emailinput
                  type="email"
                  name="email"
                  placeholder="please enter your email"
                />
              </EmailHolder>
              <TextAreaHolder>
                <EmailLabel>message</EmailLabel>
                <TextArea type="text" name="message" cols="10" rows="4" />
              </TextAreaHolder>
            </MessageBox>
          </MessageHolder>
        </ImageAndDetailsHolder>
        <FooterComponent />
      </ContactPageParent>
    </div>
  );
}

export default DesktopContactComponent;
