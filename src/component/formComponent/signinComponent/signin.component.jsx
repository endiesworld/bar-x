import React from "react";
import {useNavigate, Navigate} from "react-router-dom";
import { connect } from "react-redux";
import LoadingPage from "../../loading/loading.component" ;
//import {auth} from "../../../firebase/firebase.util.store"

import { useFormik } from "formik";

import {
  Form,
  GroupElement,
  Label,
  Input,
  SubmitBotton,
} from "./signin.styled";
//import ButtonComponent from "../../registerButton/registerButton.component";

import {
  signinFormFields,
  initialValues,
  onSubmit,
} from "./signinFormElements";

function SigninComponent({  user }) {

 let navigate = useNavigate();

 const formik = useFormik({
    initialValues,
    onSubmit,
  });

 const submitHandler = () => {
  formik.handleSubmit() ;
  return (user) ? navigate('/dashboard', { replace: true }) : "";
 }
 
 if( !(user.user === "LOADING" || user.user === null)) {
   return <Navigate to = '/dashboard' />
 }

 if( user.user === "LOADING") {
   return <LoadingPage />
 }

  return (
    <Form onSubmit={submitHandler}>
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
    </Form>
  );
}


const mapStateToProps = (state) => {
  const { user } = state;
    return {user};
};


export default connect(mapStateToProps)(SigninComponent);
