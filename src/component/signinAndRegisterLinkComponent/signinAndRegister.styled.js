import styled from "styled-components";
import { Link as link } from "react-router-dom";

export const Parentdiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Signin = styled.h2`
  font-size: 0.8rem;
  font-family: Regular "Montserrat";

  color: ${(props) => props.color || "#291563"};
`;

export const Link = styled(link)`
  width: 50%;
  text-decoration: none;
  cursor: pointer;
`;
