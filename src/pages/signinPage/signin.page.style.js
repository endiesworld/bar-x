import styled from "styled-components";

import  Mug  from "../../assets/beer-mug.svg";

export const SignUpParent = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  min-height: ${(props) => (props.device === "mobile" ? "600px" : "450px")};
  display: flex;
  flex-direction: ${(props) => (props.device === "mobile" ? "column" : "row")};
  align-items: center;
  justify-content: center;
`;

export const WhatWeDoSection = styled.section`
  width: ${(props) => (props.device === "mobile" ? "100%" : "35%")};
  height: ${(props) => (props.device === "mobile" ? "40%" : "90%")};
  background-color: #291563;
  
  ` 
export const Mugholder = styled.div`
  width: 100%;
  height: 100%;
  background: url(${Mug}) no-repeat center;
  background-size: 50% 75%;
`;

export const FormSection = styled.section`
  width: ${(props) => (props.device === "mobile" ? "100%" : "35%")};
  height: ${(props) => (props.device === "mobile" ? "60%" : "90%")};
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
`;

export const BeerMug = styled(Mug)`
  width: 75%;
  height: 70%;
`;
