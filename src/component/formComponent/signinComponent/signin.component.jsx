import React from "react";
import {Navigate} from "react-router-dom";
import { connect } from "react-redux";
import LoadingPage from "../../loading/loading.component" ;
import { useFormik } from "formik";


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

function SigninComponent({  user }) {
  
  const formik = useFormik({
    initialValues,
    onSubmit,
  });
 
 if( !(user.user === "LOADING" || user.user === null)) {
   return <Navigate to = '/dashboard' />
 }

 if( user.user === "LOADING") {
   return <LoadingPage />
 }

  return (
    <>
    <Form onSubmit={formik.handleSubmit}>
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
  const { user } = state;
    return {user};
};


export default connect(mapStateToProps)(SigninComponent);
