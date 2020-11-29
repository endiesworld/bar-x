import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const TaskBarParentDiv = styled.div`
  background-color: ${(props) => props.background || "#ffffff"};
  height: 100vh;
  width: ${(props) => props.width || "20%"};
  max-width: 200px;
  min-width: 150px;
  margin-top: ${(props) => props.deviceType === "large" ? "50px" : "8px"}; 
  padding-top: 20px;
`;

export const TaskBarElementHolder = styled.div`
  height: 10%;
  width: 100%;
  color: ${(props) => props.color };
  display: flex;
  align-items: center;
  padding-left: 10%;
  cursor: pointer;
  :hover {
    background-color: #ffba00;
    color: #291563;
  }
`;

export const Link = styled(NavLink)`
  text-decoration-line: none;
`;

export const TaskBarCloser = styled.div`
cursor: pointer ;
padding-left: 120px ;
font-size:20px;
color:  #ffba00;
` ;