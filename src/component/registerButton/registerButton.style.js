import styled from "styled-components";

export const StyledButton = styled.button`
  background: ${(props) => props.background || "#ffffff"};
  border: 1px solid #291563;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
`;

export const ButtonText = styled.h2`
  font-size: 0.8rem;
  color: ${(props) => props.color || "#291563"};
  font-family: Regular "Montserrat";
`;
