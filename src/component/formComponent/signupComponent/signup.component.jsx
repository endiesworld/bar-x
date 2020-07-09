import React from "react";

import {
  Form,
  GroupElement,
  Label,
  Input,
  Select,
} from "./signup.component.style";
import ButtonComponent from "../../registerButton/registerButton.component";

import signupFormElement from "../signupFormElement";

function SignUpComponent() {
  return (
    <Form>
      {signupFormElement.map((element, index) => (
        <GroupElement key={index}>
          <Label>{element.label}</Label>
          {element.inputType === "input" && (
            <Input
              placeholder={element.placeHolder}
              type={element.inputType}
              required
            />
          )}
          {element.inputType === "password" && (
            <Input
              placeholder={element.placeHolder}
              type={element.inputType}
              required
            />
          )}
          {element.inputType === "select" && (
            <Select placeholder={element.placeHolder}>
              {element.values.map((value, index2) => (
                <option key={index2} value={value}>
                  {value}
                </option>
              ))}
            </Select>
          )}
        </GroupElement>
      ))}
      <GroupElement>
        <ButtonComponent
          color="#ffffff"
          background="#291563"
          text=" Register "
          width="8.5em"
          height="2em"
        />
      </GroupElement>
    </Form>
  );
}

export default SignUpComponent;
