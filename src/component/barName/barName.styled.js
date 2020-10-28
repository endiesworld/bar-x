import styled from "styled-components";

export const NameHolder = styled.div`
  background: ${(props) => props.backgroundColor || "#ffffff"};
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

export const TaskHolder = styled.div`
  border-radius: 4px;
  display: ${(props) => props.taskBarState};
  width: 56%;
  height: 600px;
  position: absolute;
  margin-top: 36em;
  margin-left: 3em;
  background: #f5f5f5;
`;
