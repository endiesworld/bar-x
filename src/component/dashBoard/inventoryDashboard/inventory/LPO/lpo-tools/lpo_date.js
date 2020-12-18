 import { connect } from "react-redux" ;

 import {generateLPO}from "../../../../../../firebase/inventory/lpos" ;

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
export const tableLabels = ["S/N", "Item Description" , "Qty", "Unit",  "Unit Price", "Amount"]
export const lpoInputFieldWidthSize = ["7%", "48.5%", "7%", "7%", "14%", "14%"] ;
export const max_lpoInputFieldWidthSize = ["50.6px", "364px", "50.6px", "50.6px", "101.2px", "101.2px"] ;

const poObjects = [poRowData ] ;

 export const initialValues = {
  poNumber: "00001" ,
  poDate:  poDate,
  vendorContactPerson: "", 
  vendorCompanyName: "",
  vendorAddress: "", 
  vendorPhone: "", 
  vendorEmail: "",
  note: "" ,
  deliveryToContactPerson: "", 
  deliveryToCompanyName: "", 
  deliveryToAddress: "", 
  deliveryToPhone: "",
  deliveryToEmail: "",
  poItems: poObjects ,
  subTotal: 0,
  percentageDiscount: 0,
  discountValue: 0,
  percentageTax: 0 ,
  taxValue: 0 ,
  deliveryCost: 0,
  totalAmount: 0 ,
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




const processDiscount = (getFieldMeta, existingSubTotal = undefined ) => {
   const percentageValue = getFieldMeta("percentageDiscount").value ;
   const subTotalValue = existingSubTotal || getFieldMeta("subTotal").value ; 
   let processedDiscountValue ;
   (percentageValue) ? ( processedDiscountValue = 
    (percentageValue/100) * subTotalValue ) : processedDiscountValue =  0;
   return processedDiscountValue ;
} 

const processTaxValue = (getFieldMeta, existingSubTotal = undefined) => {
    const percentageValue = getFieldMeta("percentageTax").value ;
    const subTotalValue = existingSubTotal || getFieldMeta("subTotal").value ; 
    const subTotalAfterDiscount = subTotalValue - processDiscount(getFieldMeta, subTotalValue) ;
    let processedTaxValue ;
   (percentageValue) ? ( processedTaxValue = (percentageValue/100) * subTotalAfterDiscount ) : processedTaxValue =  0;
   return processedTaxValue ;
}
   
const valueProcessor = {
    discountValue: processDiscount ,
    taxValue: processTaxValue
}

export const setTotalValue = (setFieldValue, getFieldMeta, setFieldTouched, existingSubTotal = undefined ) => {
    const subTotal = existingSubTotal || getFieldMeta("subTotal").value ;
    const discountValue = processDiscount(getFieldMeta, existingSubTotal) ;
    const taxValue = processTaxValue(getFieldMeta, existingSubTotal) ;
    const deliveryCost = getFieldMeta("deliveryCost").value ;
    const totalAmount = subTotal - discountValue + taxValue + deliveryCost ;
    setFieldValue("taxValue", taxValue) ;
    setFieldTouched("taxValue", true) ;
    setFieldValue("discountValue", discountValue) ;
   setFieldTouched("discountValue", true) ;
    setFieldValue("totalAmount", totalAmount);
    setFieldTouched("totalAmount" ,  true) ;
}    

export const setDiscountValue = (setFieldValue, getFieldMeta, setFieldTouched, valueToSet ) => {
   let realValue = valueProcessor[valueToSet](getFieldMeta) ;
   setFieldValue(valueToSet, realValue) ;
   setFieldTouched(valueToSet, true) ;
   setTotalValue(setFieldValue, getFieldMeta, setFieldTouched )
}

export const processAmountSubTotal = (setFieldValue, getFieldMeta , index, setFieldTouched) => {
    const  newItemAmount = getFieldMeta(`poItems[${index}].quantity`).value * getFieldMeta(`poItems[${index}].rate`).value
    let subTotal = newItemAmount ;
    let existingItemsIndex = index -1 ;
    setFieldValue(`poItems[${index}].amount`, newItemAmount );
    setFieldTouched(`poItems[${index}].amount` ,  true) ;
    while(existingItemsIndex>= 0) {
        subTotal += getFieldMeta(`poItems[${existingItemsIndex}].amount`).value ;
        existingItemsIndex-- ;
    }
    setFieldValue("subTotal", subTotal );
    setFieldTouched("subTotal" ,  true) ; 
    setTotalValue(setFieldValue, getFieldMeta, setFieldTouched, subTotal)
}

const testingFunction = (dataAsProps) => console.log("Data as ptops: ", dataAsProps)

const mapStateToProps = (state) => {
  const { uid } = state.uid ;
  return {  uid};
};

export default connect(mapStateToProps)(testingFunction);

export const onSubmit = (values) => {
  let lpoData = JSON.stringify(values, null, 2);
  lpoData = JSON.parse(lpoData) ;
  generateLPO(lpoData) ;
};