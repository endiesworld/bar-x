import {signIn}  from "../../../firebase/firebase.util.store" ;

const email = {
  label: "Email",
  name: "email",
  inputType: "email",
  placeHolder: "Enter your business email address",
};

const password = {
  label: "Password",
  name: "password",
  inputType: "password",
  placeHolder: "Enter password for your barx account",
};

export const signinFormFields = [email, password];

export const initialValues = {
  password: "",
  email: "",
};

export const onSubmit = async (values) => {
  let userDetails = JSON.stringify(values, null, 2);
  userDetails = JSON.parse(userDetails) ;
  signIn(userDetails.email, userDetails.password) ;
};
