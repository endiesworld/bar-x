import React from "react";

import { useFormik } from "formik";

import {
  Form,
  GroupElement,
  Label,
  Input,
  Select,
  SubmitBotton,
  Strength,
} from "./signup.style";
//import ButtonComponent from "../../registerButton/registerButton.component";

import {
  signupFormFields,
  initialValues,
  onSubmit,
  validate,
  passwordProperties,
} from "./signupFormElement";

function SignUpComponent() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      {signupFormFields.map((element, index) => (
        <GroupElement key={index}>
          <Label>
            {element.label}{" "}
            {element.name === "password" && (
              <Strength
                colour={() =>
                  passwordProperties(formik.values.password).signalColor
                }
              >
                {passwordProperties(formik.values.password).strength}
              </Strength>
            )}
          </Label>
          {element.inputType === "select" ? (
            <Select
              placeholder={element.placeHolder}
              name={element.name}
              id={element.name}
              onChange={formik.handleChange}
              value={formik.values[element.name]}
            >
              {element.values.map((value, index2) => (
                <option key={index2} value={value}>
                  {value}
                </option>
              ))}
            </Select>
          ) : (
            <Input
              placeholder={element.placeHolder}
              type={element.inputType}
              required
              name={element.name}
              id={element.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values[element.name]}
              borderColor={() =>
                (formik.touched[element.name] &&
                  formik.errors[element.name] &&
                  "red") ||
                ""
              }
            />
          )}
          {formik.touched[element.name] && formik.errors[element.name] && (
            <Strength>{formik.errors[element.name]}</Strength>
          )}
        </GroupElement>
      ))}
      <GroupElement>
        <SubmitBotton type="submit"> Register</SubmitBotton>
      </GroupElement>
    </Form>
  );
}

export default SignUpComponent;
