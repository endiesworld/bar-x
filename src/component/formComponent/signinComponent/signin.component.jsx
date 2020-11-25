import React from "react";
import {Navigate} from "react-router-dom";
import { connect } from "react-redux";
import LoadingPage from "../../loading/loading.component" ;
import { useFormik } from "formik";
import {getUserDetails} from "../../../redux/user/user.selector" ;


import {
  Form,
  GroupElement,
  Label,
  Input,
  SubmitBotton,
  DontHaveAccount,
  Register,
  Link
} from "./signin.styled";

import {
  signinFormFields,
  initialValues,
  onSubmit,
} from "./signinFormElements";

function SigninComponent( {userDetails } ) {
  console.log("user details:", userDetails)
  
  const formik = useFormik({
    initialValues,
    onSubmit,
  });
 
 if( !(userDetails === "LOADING" || userDetails === null)) {
   return <Navigate to = '/dashboard' /> ;
 }

  else if( userDetails === "LOADING") {
   return <LoadingPage /> ;
 }
else if (userDetails === null)
  return (
    <>
    <Form onSubmit={ formik.handleSubmit}>
      {signinFormFields.map((element, index) => (
        <GroupElement key={index}>
          <Label>{element.label} </Label>
          <Input
            placeholder={element.placeHolder}
            type={element.inputType}
            required
            autoComplete= "on"
            name={element.name}
            id={element.name}
            onChange={formik.handleChange}
            value={formik.values[element.name]}
          />
        </GroupElement>
      ))}
      <GroupElement>
        <SubmitBotton type="submit"> Signin</SubmitBotton>
      </GroupElement>
      <DontHaveAccount >
        <Register >
          You don't have an account ? 
        </Register>
        <Link to="/signup">
          <Register> sign up </Register>
        </Link>
      </DontHaveAccount >
    </Form>
    
    </>
  );
}


const mapStateToProps = (state) => {
  const userDetails = getUserDetails(state) ;
    return {userDetails};
};

export default connect(mapStateToProps)(SigninComponent);
