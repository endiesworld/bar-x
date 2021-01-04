import React from 'react' ;
import {FieldArray} from "formik" ;
import { connect } from "react-redux";

import {addItem} from "../../../../../../redux/lpo/addItemToLPO.action";
import {LpoItemGroupElements, LpoInputField} from "./generate_lpo.styled" ;
import {lpoInputFieldWidthSize, max_lpoInputFieldWidthSize, processAmountSubTotal } from "../lpo-tools/lpo_data_processor" ;

function LpoItemsFieldGenerator({ addItemToPO, name}) {
    
    return (
         <FieldArray name={name}>
                            {
                                fieldArrayProps => {
                                    const {push, form:{values:{poItems}}} = fieldArrayProps ;
                                    addItemToPO(push) ;
                                    return  poItems.map((poItem, index) => 
                                             <LpoItemGroupElements key = {index}>
                                                 <FieldArray name ={`poItems[${index}]`} >
                                                     {
                                                     (formikFieldProps) => {                                                   
                                                     const { form:{setFieldValue, getFieldMeta, handleBlur, handleChange, setFieldTouched}} =  formikFieldProps ;
                                                     const itemsInPo = Object.keys(poItem)   ;
                                                      return itemsInPo.map((item, index2) =>  <LpoInputField  key ={index2} inputtype={index2}
                                                      readOnly = { (index2 === 0 || index2 === 5) ? true : false}
                                                      width = {lpoInputFieldWidthSize[index2]}
                                                      max_width ={max_lpoInputFieldWidthSize[index2]}
                                                      name= {`poItems[${index}].${item}`} 
                                                      onBlur = {(e) =>{handleBlur(e) ; 
                                                            (index2 === 2 || index2 === 4 ) && processAmountSubTotal(setFieldValue, getFieldMeta, index, setFieldTouched) ;
                                                            }}
                                                      type = {(index2 === 1 || index2 === 3 )?  "text" : "number"}
                                                      onChange = { (e) => {handleChange(e) ; 
                                                      (!getFieldMeta(`poItems[${index}].sNumber`).touched ) && 
                                                      setFieldValue(`poItems[${index}].sNumber`, index +1 ) &&  setFieldTouched(`poItems[${index}].sNumber` ,  true) ; ;}
                                                      }
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

