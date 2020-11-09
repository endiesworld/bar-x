
import {signUp}  from "../../../firebase/firebase.util.store" ;

const state = {
  label: "State",
  name: "state",
  inputType: "select",
  placeHolder: "Choose State",
  values: [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
  ],
};

const barName = {
  label: "Bar name",
  inputType: "text",
  name: "barName",
  placeHolder: "Enter the label of your bar",
};

const mobileNumber = {
  label: "Contact No.",
  inputType: "tel",
  name: "mobileNumber",
  placeHolder: "Enter the contact number",
};

const city = {
  label: "City",
  name: "city",
  inputType: "text",
  placeHolder: "Choose city",
};

const address = {
  label: "Address",
  name: "address",
  inputType: "text",
  placeHolder: "Enter your business location",
};

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

const confirmPassword = {
  label: "Confirm password",
  name: "confirmPassword",
  inputType: "password",
  placeHolder: "confirm password entered above",
};

export const signupFormFields = [
  barName,
  state,
  city,
  address,
  mobileNumber,
  email,
  password,
  confirmPassword,
];

export const initialValues = {
  barName: "",
  state: "",
  city: "",
  address: "",
  mobileNumber: "" ,
  password: "",
  confirmPassword: "",
  email: "",
};

export const onSubmit = (values) => {
  let newUserDetails = JSON.stringify(values, null, 2);
  newUserDetails = JSON.parse(newUserDetails) ;
  signUp(newUserDetails.email, newUserDetails.password) ;
 
  
};




 

export const validate = (values) => {
  let errors = {};

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!(values.password === values.confirmPassword)) {
    errors.confirmPassword = "does not match value in passowrd";
  }

  return errors;
};

const TestPasswordSecurityLevel = (password) => {
  let passwordSecurityLevel = 0;
  let digitTest = /[0-9]/;
  let lowerCaseTest = /[a-z]/;
  let upperCaseTest = /[A-Z]/;
  let specialCharTest = /[~!@#$%/^&*})(?{\-=_]/;

  const passwordTester = [
    digitTest,
    lowerCaseTest,
    upperCaseTest,
    specialCharTest,
  ];

  passwordTester.forEach((testCase) => {
    testCase.test(password) && passwordSecurityLevel++;
  });
  return passwordSecurityLevel;
};

export const passwordProperties = (password) => {
  let signalColor = "red";
  let strength = "  e.g PassMyWorD#&23";
  switch (TestPasswordSecurityLevel(password)) {
    case 1: {
      signalColor = "red";
      strength = " (poor password)";
      break;
    }

    case 2: {
      signalColor = "#ffba00";
      strength = "(weak password)";
      break;
    }
    case 3: {
      signalColor = "#7ba832";
      strength = "(average password)";
      break;
    }
    case 4: {
      signalColor = "green";
      strength = "(strong password )";
      break;
    }
    default:
      break;
  }

  return {
    strength,
    signalColor,
  };
};
