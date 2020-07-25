import styled from "styled-components";

export const NameHolder = styled.div`
  background: ${(props) => props.backgorundColor || "#ffffff"};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
`;

export const Text = styled.h2`
  font-size: 0.8rem;
  color: ${(props) => props.textColor || "#291563"};
  font-family: Regular "Montserrat";
`;
