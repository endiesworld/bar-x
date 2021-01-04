import React from 'react' ;

import {LposHolder, Heading, TableTitle,TotalAmountLabel,
        AmountAndCurrency,NairaSymbol,Amount, LpoSummaryGroup, LpoSummary, 
        DataGroup, DataLabel, DataValue } from "./lpoStatus.styled" ;
 
import {cssProperties} from "./lpo_data" ;        

function LpoTable({title , lpoTotalAmount, lpoSummary}) {
    return (
        <LposHolder backGroundImage = {cssProperties[title].gradient}>
            <Heading textColor = {cssProperties[title].textColor}>
                <TableTitle backGroundColor = {cssProperties[title].title}>{`${title} LPOs`}</TableTitle>
                <TotalAmountLabel>total amount</TotalAmountLabel>
                <AmountAndCurrency>
                    <NairaSymbol>&#x20A6;</NairaSymbol>
                    <Amount>{lpoTotalAmount}</Amount>
                </AmountAndCurrency>    
            </Heading>           
            <LpoSummaryGroup>
                {lpoSummary.map((lpo, index) => 
                    <LpoSummary key ={index}>
                        <DataGroup>
                            <DataLabel>Date: </DataLabel>
                            <DataValue>{lpo.poDate}</DataValue>
                        </DataGroup>
                        <DataGroup>
                            <DataLabel>Number: </DataLabel>
                            <DataValue>{lpo.poNumber}</DataValue>
                        </DataGroup>
                        <DataGroup>
                            <DataLabel>Amount: </DataLabel>
                            <DataValue>{lpo.totalAmount}</DataValue>
                        </DataGroup>
                        <DataGroup>
                            <DataLabel>Vendor: </DataLabel>
                            <DataValue>{lpo.vendorCompanyName}</DataValue>
                        </DataGroup>
                    </LpoSummary>
                        )}                           
            </LpoSummaryGroup>
        </LposHolder>        
    )
}

export default LpoTable;