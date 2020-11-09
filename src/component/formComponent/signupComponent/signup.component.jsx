import React from "react";

import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';


import {
  Form,
  GroupElement,
  Label,
  Input,
  Select,
  SubmitBotton,
  Strength,
} from "./signup.style";


import {
  signupFormFields,
  initialValues,
  onSubmit,
  validate,
  passwordProperties,
} from "./signupFormElement";

function SignUpComponent() {
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

 const submitHandler = async () => {
   await formik.handleSubmit() ;
   navigate('/dashboard', { replace: true });
 }
 

  return (
    
    <Form onSubmit={submitHandler}>
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
              autoComplete= "on"
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
