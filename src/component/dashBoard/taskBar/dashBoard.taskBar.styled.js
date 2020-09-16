import styled from "styled-components";
import { Link as link } from "react-router-dom";

export const TaskBarParentDiv = styled.div`
  background-color: ${(props) => props.background || "#ffffff"};

  height: 100%;
  width: 13%;
`;

export const TaskBarElementHolder = styled.div`
  background-color: ${(props) => props.background || "#f5f5f5"};
  height: 10%;
  width: 100%;
  color: #291563;
  display: flex;

  align-items: center;
  padding-left: 10%;
  cursor: pointer;
  :hover {
    background-color: #ffba00;
  }
`;
export const Link = styled(link)`
  text-decoration: none;
  :active {
    background-color: #ffba00;
  }
`;
