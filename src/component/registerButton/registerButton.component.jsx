import React from "react";
import { StyledButton, ButtonText } from "./registerButton.style";

function ButtonComponent(props) {
  return (
    <StyledButton
      background={props.background}
      width={props.width}
      height={props.height}
    >
      <ButtonText color={props.color}>{props.text}</ButtonText>
    </StyledButton>
  );
}

export default ButtonComponent;
