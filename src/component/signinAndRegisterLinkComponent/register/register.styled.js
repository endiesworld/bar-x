import styled from "styled-components";
import { Link as link } from "react-router-dom";

export const ParentDiv = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  border-radius: 4px;
`;
export const Link = styled(link)`
  text-decoration: none;
  cursor: pointer;
`;

export const RegisterText = styled.h2`
  font-size: 0.8rem;
  font-family: Regular "Montserrat";
`;

export const LinkText = styled.h2`
  border-top: 1em;
  font-size: 0.8rem;
  color: #ffffff;

  font-family: Regular "Montserrat";
  :hover {
    background: #ffba00;
    color: #291563;
  }
`;

export const RegisterAndArrowHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  color: ${(props) => props.color || "#291563"};

  :hover {
    background: #291563;
    color: #ffffff;
  }
`;

export const DropdownHolder = styled.div`
  height: 80px;
  display: none;

  ${ParentDiv}:hover & {
    display: block;
    background: #291563;
  }
`;
export const Arrow = styled.div`
  margin-right: 2em;
  transition: transform 1s;
  ${ParentDiv}:hover & {
    transform: rotate(90deg);
  }
`;
