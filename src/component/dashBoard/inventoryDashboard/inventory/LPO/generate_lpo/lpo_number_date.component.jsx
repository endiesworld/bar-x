import React from 'react' ;

import { OrderAndDate, OrderAndDateTitle, OrderNoAndDateField , } from "./generate_lpo.styled" ;

function GenerateDateAndNumber({type, name, label, datatype, deviceType}) {
    return (
        
             <OrderAndDate datatype = {datatype}>
                <OrderAndDateTitle>{label}</OrderAndDateTitle>
                <OrderNoAndDateField devicetype = {deviceType}  type= {type || "text"} required 
                    autoComplete= "on" name= {name} />
            </OrderAndDate>                                                  
    )
}

export default GenerateDateAndNumber ;
