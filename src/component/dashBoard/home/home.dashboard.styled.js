import styled from "styled-components" ;


export const HomeParentDiv = styled.div`
width: 90% ;
height: 90% ;
 display: grid ;
 grid-template-columns: 50% 50% ;
 grid-template-rows: auto;
 justify-items: center;
 align-items: center;
  overflow: auto ;

`;

export const HomeChildrenDiv = styled.div`
cursor: pointer ;
width: 30vw ;
height: 35vh;
background-color:  #EEF2F7; 
box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);
:hover {
    
    box-shadow: 5px 5px 10px 7px #291563;
}
 
`;
export const Board = styled.div`
 margin-top: 1em ;
 margin-left: 1em ;
 width: 90% ;
 height: 90% ;
 
`; 
export const DisplaySubject = styled.div`
 
`;

export const SummaryHolder = styled.div`
  width: 90% ;
 height: 90% ;
 background: green ;
`;

