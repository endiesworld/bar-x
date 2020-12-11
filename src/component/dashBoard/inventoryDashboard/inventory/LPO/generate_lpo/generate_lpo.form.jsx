import React from 'react' ;
import { connect } from "react-redux" ;

import {getUserDetails} from "../../../../../../redux/user/user.selector" ;
import {getDeviceType} from "../../../../../../redux/deviceType/deviceType.selector" ;

import {ParentDiv, LPOFormik, FormikForm, Header, VendorCustomerSection, ItemSection, VendorSide, VendorSideHeader,
     DeliverySide, DeliverySideHeader, 
     UserDetailsSection , OrderSection, PageTitle, DateAndOrder,  OrderTitleHolder, UserDeatails, BarName,
     SubmitBotton, DeliverySideDetails, VendorDetails,LpoItemGroupElements,
} from "./generate_lpo.styled" ;
import FooterComponent from "../../../../../footerComponent/footer.component" ;
import {initialValues, onSubmit, vendorDetails, deliveryToDetails, poRowData } from "../lpo-tools/lpo_date" ;
import LpoItemsFieldGenerator from "./lpo_items_field_generator.component"   ; 
import VendorAndDeliveryTo from "./lpo_vendor_deliveryTo.component" ;
import GenerateDateAndNumber from "./lpo_number_date.component"


function GenerateLPO({ deviceType, userDetails, addItemToLPO }) {
    const {barName, state, city, address, mobileNumber, email} = userDetails ;    
    return (
        <ParentDiv>
                <LPOFormik initialValues = {initialValues} onSubmit={onSubmit}>
                 <FormikForm>
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
                                <GenerateDateAndNumber devicetype = {deviceType}  label ="P . O.  NUMBER" name ="poNumber" />
                                <GenerateDateAndNumber devicetype = {deviceType}  label ="DATE" name ="poDate" datatype ="date" />
                            </DateAndOrder>
                        </OrderSection>
                    </Header>
                    <VendorCustomerSection>
                        <VendorSide>
                            <VendorSideHeader> VENDOR </VendorSideHeader>
                            <VendorDetails>
                                {vendorDetails.map((element, index) =>(
                                    < VendorAndDeliveryTo key = {index} element = {element} />
                                ))}
                            </VendorDetails>
                        </VendorSide>
                        < DeliverySide>
                            <DeliverySideHeader>DELIVERY TO</DeliverySideHeader>
                            <DeliverySideDetails>
                                {deliveryToDetails.map((element, index) =>
                                    < VendorAndDeliveryTo key = {index} element = {element} />
                                )}
                            </DeliverySideDetails>
                        </DeliverySide>
                    </VendorCustomerSection>
                    <ItemSection>
                        <LpoItemsFieldGenerator name = "poItems" />
                    </ItemSection>
                    <LpoItemGroupElements>
                        <SubmitBotton type="submit"> Generate LPO</SubmitBotton>
                        <SubmitBotton type="button" onClick = {() => addItemToLPO(poRowData )}> Add items</SubmitBotton>
                    </LpoItemGroupElements>
                </FormikForm>
            </LPOFormik>
            <FooterComponent/>
        </ParentDiv>
    )
};

const mapStateToProps = (state) => {
  const deviceType  =  getDeviceType(state) ;
  const userDetails = getUserDetails(state) ;
  const { addItemToLPO } = state.addItemToLPO ;
  return { deviceType, userDetails, addItemToLPO };
};

export default connect(mapStateToProps)(GenerateLPO);


