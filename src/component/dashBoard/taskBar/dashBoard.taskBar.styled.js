import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const TaskBarParentDiv = styled.div`
  background-color: ${(props) => props.background || "#ffffff"};
  height: 100vh;
  width: ${(props) => props.width || "20%"};
  color: #291563;
  max-width: 200px;
  min-width: 150px;
  margin-top: 4%;
  padding-top: 20px;
`;

export const TaskBarElementHolder = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 10%;
  cursor: pointer;
  :hover {
    background-color: #ffba00;
  }
`;

export const Link = styled(NavLink)`
  text-decoration-line: none;
`;
