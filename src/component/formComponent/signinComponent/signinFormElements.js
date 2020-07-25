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

export const onSubmit = (values) => {
  alert(JSON.stringify(values, null, 2));
  console.log("form data are, ", values);
  // console.log("errors in the form you submited are, ", errors.password);
};
