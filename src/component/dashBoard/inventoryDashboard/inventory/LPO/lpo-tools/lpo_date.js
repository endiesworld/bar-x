 
 export const getCurrentdate = () => {
  const  [month, day, year]    = new window.Date().toLocaleDateString("en-US").split("/") ;
  return `${day}/${month}/${year}` ;
 } ;
 
 const poDate = getCurrentdate() ;

 export const poRowData = {
     sNumber : "",
     productDecription: "" ,
     quantity: 1,
     unit: "",
     rate: 1,
     amount: "", 
 }

const poObjects = [poRowData ] ;

 export const initialValues = {
  poNumber: "00001" ,
  poDate:  poDate,
  vendorContactPerson: "", 
  vendorCompanyName: "",
  vendorAddress: "", 
  vendorPhone: "", 
  vendorEmail: "",
  deliveryToContactPerson: "", 
  deliveryToCompanyName: "", 
  deliveryToAddress: "", 
  deliveryToPhone: "",
  deliveryToEmail: "",
  poItems: poObjects ,
};

export const onSubmit = (values) => {
  let lpoData = JSON.stringify(values, null, 2);
  lpoData = JSON.parse(lpoData) ;
  console.log("User Details: ", lpoData )
};

const vendorName =  {
    label: "CONTACT PERSON" ,
    name: "vendorContactPerson" ,
    type: "text"
};

const vendorCompanyName =  {
    label: "COMPANY NAME" ,
    name: "vendorCompanyName",
    type: "text" ,
}

const vendorAddress =  {
    label: "ADDRESS" ,
    name: "vendorAddress",
    type: "text" ,
}

const vendorPhone =  {
    label: "PHONE" ,
    name: "vendorPhone",
    type: "tel" ,
}

const vendorEmail =  {
    label: "EMAIL" ,
    name: "vendorEmail",
    type: "email" ,
}

export const vendorDetails = [vendorName, vendorCompanyName, vendorAddress, vendorPhone, vendorEmail] ;

const deliveryToName =  {
    label: "CONTACT PERSON" ,
    name: "deliveryToContactPerson",
    type: "text" ,
};

const deliveryToCompanyName =  {
    label: "COMPANY NAME" ,
    name: "deliveryToCompanyName",
    type: "text" ,
}

const deliveryToAddress =  {
    label: "ADDRESS" ,
    name: "deliveryToAddress",
    type: "text" ,
}

const deliveryToPhone =  {
    label: "PHONE" ,
    name: "deliveryToPhone",
    type: "tel"
}

const deliveryToEmail =  {
    label: "EMAIL" ,
    name: "deliveryToEmail",
    type: "email"
}

export const deliveryToDetails = [deliveryToName, deliveryToCompanyName, deliveryToAddress, 
    deliveryToPhone,deliveryToEmail] ;

// export const LPOData = [

// ]