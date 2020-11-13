import styled from "styled-components";

import { ReactComponent as Mug } from "../../assets/beer-mug.svg";

export const SignUpParent = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: ${(props) => (props.device === "mobile" ? "150vh" : "100vh")};
  display: flex;
  flex-direction: ${(props) => (props.device === "mobile" ? "column" : "row")};
  align-items: center;
  justify-content: center;
`;

export const WhatWeDoSection = styled.section`
  width: ${(props) => (props.device === "mobile" ? "100%" : "35%")};
  height: ${(props) => (props.device === "mobile" ? "35%" : "90%")};
  background-color: #291563;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormSection = styled.section`
  width: ${(props) => (props.device === "mobile" ? "100%" : "35%")};
  height: ${(props) => (props.device === "mobile" ? "65%" : "90%")};
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
