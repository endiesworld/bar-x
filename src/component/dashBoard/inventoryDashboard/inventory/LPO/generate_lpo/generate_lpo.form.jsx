import React from 'react' ;
import { connect } from "react-redux" ;

import {getUserDetails} from "../../../../../../redux/user/user.selector" ;
import {getDeviceType} from "../../../../../../redux/deviceType/deviceType.selector" ;

import {ParentDiv, LPOFormik, FormikForm, Header, VendorCustomerSection, ItemSection, VendorSide, VendorSideHeader,
     DeliverySide, DeliverySideHeader, UserDetailsSection , OrderSection, PageTitle, DateAndOrder, SubTotalSide,
     OrderTitleHolder, UserDeatails, BarName, SubmitBotton, DeliverySideDetails, LpoInputField, SubTotalSideLabel,
    VendorDetails,LpoItemGroupElements, LpoInputFieldLabel, NoteAndTotalSide, NoteSide, TotalSide
} from "./generate_lpo.styled" ;
import FooterComponent from "../../../../../footerComponent/footer.component" ;
import {initialValues, onSubmit, vendorDetails, deliveryToDetails, poRowData, tableLabels, setDiscountValue,
lpoInputFieldWidthSize, max_lpoInputFieldWidthSize, setTotalValue} from "../lpo-tools/lpo_date" ;
import LpoItemsFieldGenerator from "./lpo_items_field_generator.component"   ; 
import VendorAndDeliveryTo from "./lpo_vendor_deliveryTo.component" ;
import GenerateDateAndNumber from "./lpo_number_date.component"


function GenerateLPO({ deviceType, userDetails, addItemToLPO , uid}) {
    const {barName, state, city, address, mobileNumber, email} = userDetails ;   
    
    return (
        <ParentDiv>
                <LPOFormik initialValues = {{...initialValues, uid: uid}} onSubmit={onSubmit}>
                    {(formProps) =>
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
                        <LpoItemGroupElements >
                            {tableLabels.map((label, index) => 
                            <LpoInputFieldLabel width = {lpoInputFieldWidthSize[index]}
                                max_width ={max_lpoInputFieldWidthSize[index]} key = {index}> 
                                {label}
                            </LpoInputFieldLabel>  )}
                                   
                        </LpoItemGroupElements>
                        <LpoItemsFieldGenerator name = "poItems" />
                    </ItemSection>
                    <NoteAndTotalSide>
                        <NoteSide>
                            <LpoInputFieldLabel width = "100%" text_align = "start"
                                max_width = "414.6px" padding_left = "5px"> 
                                Note
                            </LpoInputFieldLabel>
                            <LpoInputField component="textarea" autoComplete= "on" id="note" name= "note" height ="105px"/>  
                        </NoteSide>
                        <TotalSide>
                            <SubTotalSide>
                                <SubTotalSideLabel > Sub-Total</SubTotalSideLabel>
                                <LpoInputField readOnly ={true} autoComplete= "on" name= "subTotal" width="33.3%" height="100%" max_width="101.2px" />
                            </SubTotalSide>
                            <SubTotalSide>
                                <SubTotalSideLabel width="43.3%">Discount(%)</SubTotalSideLabel>
                                <LpoInputField type="number" autoComplete= "on" name= "percentageDiscount" width="23.4%" 
                                height="100%" max_width="101.2px" 
                                onBlur={(e) => {formProps.handleBlur(e);
                                setDiscountValue(formProps.setFieldValue, formProps.getFieldMeta,
                                 formProps.setFieldTouched, "discountValue" )}} />
                                <LpoInputField type="number" readOnly = {true}  autoComplete= "on" name= "discountValue"
                                 width="33.3%" height="100%" max_width="101.2px" />
                            </SubTotalSide>
                            <SubTotalSide>
                                <SubTotalSideLabel width="43.3%">Tax(%)</SubTotalSideLabel>
                                <LpoInputField type="number" autoComplete= "on" name= "percentageTax" width="23.4%" 
                                height="100%" max_width="101.2px" 
                                onBlur={(e) => {formProps.handleBlur(e);
                                setDiscountValue(formProps.setFieldValue, formProps.getFieldMeta,
                                 formProps.setFieldTouched, "taxValue" )}}/>
                                <LpoInputField type="number" readOnly = {true}  autoComplete= "on" name= "taxValue" width="33.3%" height="100%" max_width="101.2px" />
                            </SubTotalSide>
                             <SubTotalSide>
                                <SubTotalSideLabel > Delivery Cost</SubTotalSideLabel>
                                <LpoInputField type="number" autoComplete= "on" name= "deliveryCost" width="33.3%" 
                                height="100%" max_width="101.2px" 
                                onBlur={(e) => {formProps.handleBlur(e); 
                                 setTotalValue(formProps.setFieldValue, formProps.getFieldMeta, formProps.setFieldTouched) }} />
                            </SubTotalSide>
                            <SubTotalSide>
                                <SubTotalSideLabel > Total Amunt</SubTotalSideLabel>
                                <LpoInputField readOnly = {true}  autoComplete= "on" name= "totalAmount" width="33.3%" 
                                height="100%" max_width="101.2px" />
                            </SubTotalSide>
                            
                        </TotalSide>
                    </NoteAndTotalSide>
                    <LpoItemGroupElements>
                        <SubmitBotton type="submit"> Generate LPO</SubmitBotton>
                        <SubmitBotton type="button" onClick = {() => addItemToLPO(poRowData )}> Add items</SubmitBotton>
                    </LpoItemGroupElements>
                      
               
               
                </FormikForm>
                  }
            </LPOFormik>
            <FooterComponent/>
        </ParentDiv>
    )
};

const mapStateToProps = (state) => {
  const deviceType  =  getDeviceType(state) ;
  const userDetails = getUserDetails(state) ;
  const { addItemToLPO } = state.addItemToLPO ;
  const { uid } = state.uid ;
  return { deviceType, userDetails, addItemToLPO , uid};
};

export default connect(mapStateToProps)(GenerateLPO);


