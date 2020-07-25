import React from "react";

import {
  ParentDiv,
  RegisterAndArrowHolder,
  RegisterText,
  Arrow,
  DropdownHolder,
  Link,
  LinkText,
} from "./register.styled";

function Reister(props) {
  return (
    <ParentDiv>
      <RegisterAndArrowHolder color={props.color}>
        <RegisterText> Register</RegisterText>
        <Arrow>&#10140;</Arrow>
      </RegisterAndArrowHolder>
      <DropdownHolder>
        <Link to="/signup">
          <LinkText> Business Owner</LinkText>
        </Link>

        <LinkText>Merry fellow</LinkText>
      </DropdownHolder>
    </ParentDiv>
  );
}

export default Reister;
