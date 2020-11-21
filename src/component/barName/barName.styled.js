import styled from "styled-components";

export const NameHolder = styled.div`
  position: relative ;
  background: ${(props) => props.backgroundColor || "#ffffff"};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  
`;

export const Text = styled.h2`
text-align: center ;
width: auto ;
  font-size: 0.8rem;
  color: ${(props) => props.textColor || "#291563"};
  font-family: Regular "Montserrat";
`;

export const TaskHolder = styled.div`
width: 100% ;
  border-radius: 4px;
  display: ${(props) => props.taskBarState};
  height: 600px;
position: absolute ;
top: 75% ;
`;


