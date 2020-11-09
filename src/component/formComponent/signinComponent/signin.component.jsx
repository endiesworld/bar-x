import React from "react";
import {useNavigate} from "react-router-dom";

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

function SigninComponent() {
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  let navigate = useNavigate();

  

 const submitHandler = async () => {
   await formik.handleSubmit() ;
   navigate('/dashboard', { replace: true });
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

export default SigninComponent;
