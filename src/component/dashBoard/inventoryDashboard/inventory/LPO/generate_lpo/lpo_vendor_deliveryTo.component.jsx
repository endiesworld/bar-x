import React from 'react' ;

import {Label, InputField ,GroupElement} from "./generate_lpo.styled" ;


function VendorAndDeliveryTo( {element }) {
        const { name, type, label} = element ;
    return (
         <GroupElement >
            <Label>{label}</Label>
            <InputField type={type} inputtype = {label} required
                autoComplete= "on" name={name} id={name} />
        </GroupElement>
    )
};



export default VendorAndDeliveryTo;



