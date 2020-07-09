const state = {
  label: "State",
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

const barlabel = {
  label: "Bar name",
  inputType: "input",
  placeHolder: "Enter the label of your bar",
};

const city = {
  label: "City",
  inputType: "input",
  placeHolder: "Choose city",
};

const address = {
  label: "Address",
  inputType: "input",
  placeHolder: "Enter your business location",
};

const email = {
  label: "Email",
  inputType: "input",
  placeHolder: "Enter your business email address",
};

const password = {
  label: "Password",
  inputType: "password",
  placeHolder: "Enter password for your barx account",
};

const confirmPassword = {
  label: "Confirm password",
  inputType: "password",
  placeHolder: "confirm password entered above",
};

const signUpFormElements = [
  barlabel,
  state,
  city,
  address,
  email,
  password,
  confirmPassword,
];

export default signUpFormElements;
