import styled from "styled-components" ;


export const ParentDiv = styled.div`
margin-top: 100px ;
width: 100%;
max-width: 600px ;
height: auto;
display: flex ;
flex-direction: column ;
justify-content: space-between ;
align-items: center ;
` ;

export const LPODiv = styled.div`
width: 100% ;
height: 90% ;
` ;

export const Form = styled.form`
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

export const Label = styled.label`
font-size: 0.6rem;
  font-family: "PT Sans", sans-serif;
  color: #291563;
  padding-left: 5px ;
  margin-top: 5px ;
`;

export const Input = styled.input`
width: 100% ;
height: ${(props) => props.inputType === "ADDRESS" ? "50px" : "30px"  };
border: 0px ;
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

export const Order = styled.div`
display: flex ;
flex-direction: column ;
justify-content: flex-start ;
height: 100% ;
width: 60% ;
`;

export const OrderTitle = styled.h2`
color: #ffffff;
background-color:  #291563 ;
height: 30% ;
padding-left: 5px ;
`;

export const OrderNo = styled.input`
color: #00000f;
border-style: groove;
border-width: 0.1px;
border-color: #e3e3e3;
height: 70% ;
padding-top: 10px ;
padding-left: 5px ;
`;

export const Date = styled(Order)`
width: 40% ;
height: 100 ;
`;

export const DateTitle = styled(OrderTitle)`
`;

export const DateValue = styled(OrderNo)`
font-size: ${(props) => props.deviceType ==="mobile" ? "0.6em" : "0.8em" }  ;
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
padding-left: 19px ;`;

export const DeliverySideDetails = styled.div`
height: 90% ;
width: 95% ;
min-height: 280px ;
margin-left: 14px ;
`;

export const ItemSection = styled.section`
width: 100% ;
height: 60% ;
min-height: 300px ;
background-color: green ;
`;
