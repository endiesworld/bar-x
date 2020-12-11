import React from 'react' ;
import {FieldArray} from "formik" ;
import { connect } from "react-redux";

import {addItem} from "../../../../../../redux/lpo/addItemToLPO.action";
import {LpoItemGroupElements, LpoInputField} from "./generate_lpo.styled" ;

function LpoItemsFieldGenerator({ addItemToPO, name}) {
    return (
         <FieldArray name={name}>
                            {
                                fieldArrayProps => {
                                    const {push, form:{values:{poItems}}} = fieldArrayProps ;
                                    addItemToPO(push) ;
                                    return  poItems.map((poItem, index) => 
                                             <LpoItemGroupElements key = {index}>
                                                 <FieldArray name ={`poItems[${index}]`}>
                                                     {
                                                     (formikFieldProps) => { 
                                                     const { form:{setFieldValue, getFieldMeta, handleBlur}} =  formikFieldProps ;
                                                     const itemsInPo = Object.keys(poItem)   ;
                                                      return itemsInPo.map((item, index2) =>  <LpoInputField   key ={index2} 
                                                         name= {`poItems[${index}].${item}`} 
                                                        onBlur = {(e) =>{handleBlur(e) ; 
                                                            (index2 === 2 || index2 === 4 ) && 
                                                            setFieldValue(`poItems[${index}].amount`,
                                                             (getFieldMeta(`poItems[${index}].quantity`).value * getFieldMeta(`poItems[${index}].rate`).value))}}
                                                        type = {(index2 === 1 || index2 === 3 )?  "text" : "number"}
                                                        /> )
                                                    }
                                                }
                                                 </FieldArray>
                                             </LpoItemGroupElements>
                                    )
                                }
                            }
                        </FieldArray>
    )
}


const mapDispatchToProps = (dispatch) => {
  return {
    addItemToPO: (pushItem) => dispatch(addItem(pushItem)),
  };
};

export default connect(null, mapDispatchToProps)(LpoItemsFieldGenerator);

