import React from "react";

import { useFormik } from "formik";
import {  Navigate } from 'react-router-dom';
import LoadingPage from "../../loading/loading.component" ;
import { connect } from "react-redux";
//import {createStructuredSelector} from "reselect" ; 
import {getUserDetails} from "../../../redux/user/user.selector" ;


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

function SignUpComponent( {userDetails }) {
  
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

 
 
if( !(userDetails === "LOADING" || userDetails === null)) {
   return <Navigate to = '/dashboard' /> ;
 }

  else if( userDetails === "LOADING") {
   return <LoadingPage /> ;
 }

else if (userDetails === null)
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


// const mapStateToProps =  createStructuredSelector ( {
//   userDetails: getUserDetails
// }
// )

const mapStateToProps = (state) => {
  
  const userDetails = getUserDetails(state) ;
  
  return {  userDetails};
};


export default connect(mapStateToProps)(SignUpComponent);
