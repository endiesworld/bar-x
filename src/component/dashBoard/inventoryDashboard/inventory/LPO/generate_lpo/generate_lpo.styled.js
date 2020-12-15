import styled from "styled-components" ;
import {Formik, Form, Field  } from "formik";


export const ParentDiv = styled.div`
margin-top: 100px ;
width: 100%;
max-width: 750px ;
height: auto;
display: flex ;
flex-direction: column ;
justify-content: space-between ;
align-items: center ;
` ;

export const LPOFormik = styled(Formik)`
width: 100% ;
height: 90% ;
` ;

export const FormikForm = styled(Form)`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GroupElement = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 3px ;
`;

export const LpoItemGroupElements = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-left: 20px ;
`;

export const Label = styled.label`
font-size: 0.6rem;
  font-family: "PT Sans", sans-serif;
  color: #291563;
  padding-left: 5px ;
  margin-top: 5px ;
`;

export const InputField  = styled(Field )`
width: 100% ;
height: ${(props) => props.inputtype === "ADDRESS" ? "50px" : "30px"  };
border: 0px ;
`;

export const LpoInputFieldLabel  = styled.label`
width: ${(props) => props.width  };
max-width: ${(props) => props.max_width };
height: 35px;
border: 0.1px groove #e3e3e3;
color: #ffffff;
background-color:  #291563 ;
padding-top: 8px ;
text-align: ${(props) =>props.text_align || "center"} ;
font-size: 0.7rem;
padding-left: ${(props) =>props.padding_left || "0px"} ;
font-family: "PT Sans", sans-serif;
`;

export const LpoInputField  = styled(Field )`
width: ${(props) => props.width  };
max-width: ${(props) => props.max_width };
height: ${(props) => props.height || "25px" }; 
border: 0.1px groove #e3e3e3;
`;

export const LpoInput  = styled.input`
width: ${(props) => props.inputtype === "itemDescription" ? "25%" : "15%"  };
height: 25px;
border: 1px  solid;
`;

export const SubmitBotton = styled.button`
  background-color: #291563;
  color: #ffffff;
  font-size: 13px;
  width: 8.5em;
  border: 1px solid #291563;
  border-radius: 4px;
  height: 2em;
`;

export const Header = styled.section`
width: 100% ;
height: 120px ;
padding-left: 20px ;
padding-right: 20px ;
padding-bottom: 5px ;
display: flex ;
justify-content: space-between ;
`;

export const UserDetailsSection = styled.div`
width: 45% ;
height:100% ;
`;

export const UserDeatails = styled.p`
color: #00000f;
`;

export const BarName = styled.h2`
color: #00000f;
`;

export const OrderSection = styled.div`
width: 45% ;
height:100% ;
display: flex ;
flex-direction: column ;
justify-content: space-between ;
align-items: center ;
`;

export const OrderTitleHolder = styled.div`
height: 40% ;
width: 100% ;
color: #428af5;
`;

export const PageTitle = styled.h1`

`;

export const DateAndOrder = styled.div`
display: flex ;
height: 60% ;
width: 100% ;
`;

export const OrderAndDate = styled.div`
display: flex ;
flex-direction: column ;
justify-content: flex-start ;
height: 100% ;
width: ${(props) => props.datatype === "date" ? "40%" : "60%"} ;
`;

export const OrderAndDateTitle = styled.h2`
color: #ffffff;
background-color:  #291563 ;
height: 30% ;
padding-left: 5px ;
`;

export const OrderNoAndDateField  = styled(Field )`
color: #00000f;
border: 0.1px groove #e3e3e3;
height: 70% ;
padding-top: 10px ;
padding-left: 5px ;
font-size: ${(props) => props.devicetype ==="mobile" ? "0.6em" : "0.8em" }  ;
`;

export const VendorCustomerSection = styled.section`
padding-left: 20px ;
padding-right: 20px ;
width: 100% ;
height: 35% ;
min-height: 300px ;
background-color: #e8e7e6 ;
display: flex ;
`;

export const VendorSide = styled.div`
height: 100% ;
width: 50% ;
`;

export const VendorSideHeader = styled.h2`
color: #ffffff;
background-color:  #291563 ;
padding-left: 5px ;
width: 100% ;
`;

export const VendorDetails = styled.div`
height: 90% ;
width: 95% ;
min-height: 280px ;

`;

export const DeliverySide = styled.div`
height: 100% ;
width: 50% ;
min-height: 280px ;
`;
export const DeliverySideHeader = styled(VendorSideHeader)`
padding-left: 19px ;`

export const DeliverySideDetails = styled.div`
height: 90% ;
width: 95% ;
min-height: 280px ;
margin-left: 14px ;
`;

export const ItemSection = styled.section`
padding-top: 10px ;
width: 100% ;
height: auto;
min-height: 100px ;
background-color: #e8e7e6 ;
padding-bottom: 5px ;
`;

export const NoteAndTotalSide = styled.section`
width: 100% ;
height: 150px ;
display: flex ;
padding-left: 20px ;
background-color: #e8e7e6 ;
`;

export const NoteSide = styled.div`
width: 55.5% ;
max-width: 414.6px ;
height: 140px ;
border: 0.1px groove #e3e3e3;
display:flex ;
flex-direction:column ;
`;

export const TotalSide = styled.div`
width: 42% ;
max-width: 303.6px ;
height: 140px ;
border: 0.1px groove #e3e3e3;
display:flex ;
flex-direction:column ;
`;

export const SubTotalSide = styled.div`
width: 100% ;
height: 20% ;
display:flex ;
`;

export const SubTotalSideLabel = styled.label`
width: ${(props) => props.width || "66.67%"}  ;
max-width: ${(props) => props.max_width };
height: 100% ;
border: 0.1px groove #e3e3e3;
background-color: #ffffff ;
font-size: 0.7rem;
font-weight: bold ;
padding-top: 8px ;
padding-left: ${(props) =>props.padding_left || "5px"} ;
font-family: "PT Sans", sans-serif;
`;