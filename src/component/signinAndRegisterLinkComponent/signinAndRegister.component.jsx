import React from "react";
import { Parentdiv, Signin, Link } from "./signinAndRegister.styled";
import Register from "./register/register.component";

function SigninAndRegister(props) {
  return (
    <Parentdiv>
      <Link to="/signin">
        <Signin color={props.color}>Log in</Signin>
      </Link>

      <Register color={props.color} />
    </Parentdiv>
  );
}

export default SigninAndRegister;
