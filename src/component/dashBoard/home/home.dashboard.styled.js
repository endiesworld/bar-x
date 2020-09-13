import styled from "styled-components" ;


export const HomeParentDiv = styled.div`
width: 90% ;
height: 100% ;
 display: grid ;
 grid-template-columns: 50% 50% ;
 grid-template-rows: 50% 50%  auto;
 justify-items: center;
 align-items: center;
  overflow: auto ;

`;

export const HomeChildrenDiv = styled.div`
cursor: pointer ;
width: 90% ;
height: 85%;
background-color:  #EEF2F7; 
box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);
:hover {
    
    box-shadow: 5px 5px 10px 7px #291563;
}
 
`;
export const Board = styled.div`
/* background: green ; */
 margin-top: 1em ;
 margin-left: 1em ;
 width: 90% ;
 height: 90% ;
 
`; 
export const DisplaySubject = styled.div`
 color: #291563;
`;

export const SummaryHolder = styled.div`
  width: 100% ;
 height: 90% ;
`;

