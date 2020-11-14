import React from "react";

import { useFormik } from "formik";
import {  Navigate } from 'react-router-dom';
import LoadingPage from "../../loading/loading.component" ;
import { connect } from "react-redux";


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

function SignUpComponent( {user}) {
  
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

 
 
if( !(user.user === "LOADING" || user.user === null)) {
   return <Navigate to = '/dashboard' /> ;
 }

 if( user.user === "LOADING") {
   return <LoadingPage /> ;
 }


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


const mapStateToProps = (state) => {
  const { user } = state;
    return {user};
};


export default connect(mapStateToProps)(SignUpComponent);
