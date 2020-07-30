import styled from "styled-components" ;

export const TaskBarParentDiv = styled.div`
background-color: ${(props)=> props.background || "#ffffff"} ;

height: 100% ;
width: 13% ;
`;

export const TaskBarElementHolder = styled.div`
background-color: ${(props)=> props.background || "#f5f5f5"} ;
height: 10% ;
width: 100% ;
color: #291563 ;
padding-left: 10% ;
`;
