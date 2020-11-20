import styled from "styled-components";

export const SignUpParent = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: ${(props) => (props.device === "mobile" ? "900px" : "625px")};
  display: flex;
  flex-direction: ${(props) => (props.device === "mobile" ? "column" : "row")};
  align-items: center;
  justify-content: center;
`;

export const WhatWeDoSection = styled.section`
  width: ${(props) => (props.device === "mobile" ? "100%" : "35%")};
  height: ${(props) => (props.device === "mobile" ? "30%" : "95%")};
  background-color: #291563;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormSection = styled.section`
  width: ${(props) => (props.device === "mobile" ? "100%" : "35%")};
  height: ${(props) => (props.device === "mobile" ? "70%" : "95%")};
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const BarXholder = styled.div`
  width: 100%;
  padding-right: 120px;
`;
