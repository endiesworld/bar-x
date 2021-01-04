import styled from "styled-components" ;


export const LpoStatusParentDiv = styled.div`
margin-top: 100px ;
width: 100% ;
min-height: 500px ;
height: 100% ;
display: flex ;
flex-direction:column ;
align-items: center ;
justify-content: space-between ;
`;

export const LpoStatusDiv = styled.div`
width: 100% ;
height: auto;
min-height: 400px ;
background-color: #ffffff ;
display: flex ;
flex-direction: ${(props) => props.devicetype ==="mobile" ? "column" : "row" }  ;
align-items: center ;
justify-content: center  ;
color: #000;
`;

export const LposHolder = styled.div`
width: auto ;
min-width: 200px ;
height: 400px ; 
background-image: ${(props) => props.backGroundImage};
border: 0.1px groove #e3e3e3;
display: flex ;
flex-direction:column ;
align-items: center ;
justify-content: space-between ;
margin-left: 5px ;
margin-bottom: 10px ;
`;

export const Heading = styled.section`
width: 100% ;
height: 35%;
min-height: 150px ;
display: flex ;
flex-direction: column ;
align-items: flex-start ;
color: ${(props) => props.textColor}; 
`;

export const TableTitle = styled.h2`
width: 100%;
height: 20% ;
background-color: ${(props) => props.backGroundColor} ;
text-align: center ;
text-transform: uppercase;
`;

export const TotalAmountLabel = styled.label`
margin-top: 10px ;
height: 20% ;
width: 100% ;
text-align: center ;
font-size: 12px ;
font-family: "PT Sans", sans-serif;
`;

export const AmountAndCurrency = styled.div`
width: 100% ;
height: 40%;
min-height: 60px ;
padding-left: 10px ;
display: flex ;
align-items: flex-start ;
justify-content: center ;
`;

export const NairaSymbol = styled.p`
`;

export const Amount = styled.h1`
margin-top: 5px ;
font-size: 1.2em ;
`;

export const LpoSummaryGroup = styled.section`
width: 100% ;
height: 230px ;
display: flex ;
flex-direction: column ;
align-items: flex-start ;
overflow-y: auto ; 
`;

export const LpoSummary = styled.div`
width: 100% ;
height: 96px ;
display: flex ;
flex-direction: column ;
align-items: flex-start ;
border-bottom: 0.1px groove #e3e3e3;
cursor: pointer ;
`;

export const DataGroup = styled.div`
width: 100% ;
height: 30% ;
display: flex ;
align-items: center ;
`;

export const DataLabel = styled.p`
margin-left: 5px ;
`;

export const DataValue = styled.p`
margin-left: 5px ;
`;