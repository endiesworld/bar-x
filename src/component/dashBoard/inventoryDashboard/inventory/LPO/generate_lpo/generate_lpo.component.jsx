import React from 'react' ;
import { connect } from "react-redux";
import { useFormik } from "formik";

import {getUserDetails} from "../../../../../../redux/user/user.selector" ;
import {getDeviceType} from "../../../../../../redux/deviceType/deviceType.selector" ;

import {ParentDiv, LPODiv, Header, VendorCustomerSection, ItemSection, VendorSide, VendorSideHeader,
     DeliverySide, DeliverySideHeader, Label, Input,
     UserDetailsSection , OrderSection, PageTitle, DateAndOrder, Order, Form,
     OrderTitle, OrderNo, Date, DateTitle, DateValue, OrderTitleHolder, UserDeatails, BarName,
     SubmitBotton, GroupElement, DeliverySideDetails, VendorDetails,
} from "./generate_lpo.styled" ;
import FooterComponent from "../../../../../footerComponent/footer.component" ;
import {initialValues, onSubmit, vendorDetails, deliveryToDetails} from "../lpo-tools/lpo_date" ;


function GenerateLPO({ deviceType, userDetails }) {
    const {barName, state, city, address, mobileNumber, email} = userDetails ;
    const formik = useFormik({ initialValues, onSubmit, });

    
    return (
        <ParentDiv>
            <LPODiv>
                 <Form onSubmit={formik.handleSubmit}>
                    <Header>
                        <UserDetailsSection  >
                            <BarName >{barName}</BarName>
                            <UserDeatails>{`${address},`}</UserDeatails>
                            <UserDeatails>{`${city},${state}`}</UserDeatails>
                            <UserDeatails>{mobileNumber}</UserDeatails>
                            <UserDeatails>{email}</UserDeatails>
                        </UserDetailsSection >
                        <OrderSection>
                            <OrderTitleHolder>
                                <PageTitle > PURCHASE ORDER</PageTitle>
                            </OrderTitleHolder>
                            
                            <DateAndOrder>
                                <Order>
                                    <OrderTitle>P . O.  NUMBER</OrderTitle>
                                    <OrderNo  
                                        type= "text"
                                        required
                                        autoComplete= "on"
                                        name= "poNumber"
                                        id="poNumber"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.poNumber}/>
                                </Order>
                                <Date>
                                    <DateTitle>DATE</DateTitle>
                                    <DateValue deviceType = {deviceType} 
                                        type= "text"
                                        required
                                        autoComplete= "on"
                                        name= "poDate"
                                        id= "poDate"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.poDate}/>
                                </Date>
                            </DateAndOrder>
                        </OrderSection>
                    </Header>
                    <VendorCustomerSection>
                        <VendorSide>
                            <VendorSideHeader> VENDOR </VendorSideHeader>
                            <VendorDetails>
                                {vendorDetails.map((element) =>(
                                    <GroupElement key={element.name}>
                                        <Label>{element.label}</Label>
                                        <Input
                                        type={element.type}
                                        inputType = {element.label}
                                        required
                                        autoComplete= "on"
                                        name={element.name}
                                        id={element.name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values[element.name]}
                                        />
                                    </GroupElement>
                                ))}
                            </VendorDetails>
                        </VendorSide>
                        < DeliverySide>
                            <DeliverySideHeader>DELIVERY TO</DeliverySideHeader>
                            <DeliverySideDetails>
                                {deliveryToDetails.map((element) =>(
                                    <GroupElement key={element.name}>
                                        <Label>{element.label}</Label>
                                        <Input
                                        type={element.type}
                                        inputType = {element.label}
                                        required
                                        autoComplete= "on"
                                        name={element.name}
                                        id={element.name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values[element.name]}
                                         />
                                    </GroupElement>
                                ))}
                            </DeliverySideDetails>
                        </DeliverySide>
                    </VendorCustomerSection>
                    <ItemSection>
                            Items
                    </ItemSection>
                    <GroupElement>
                        <SubmitBotton type="submit"> Generate LPO</SubmitBotton>
                    </GroupElement>
                </Form>
                
            </LPODiv>
            
            <FooterComponent/>
        </ParentDiv>
    )
};

const mapStateToProps = (state) => {
  const deviceType  =  getDeviceType(state) ;
  const userDetails = getUserDetails(state) ;
  return { deviceType, userDetails };
};

export default connect(mapStateToProps)(GenerateLPO);


