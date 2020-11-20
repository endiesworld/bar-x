import styled from "styled-components";

import { ReactComponent as barOwnerImage } from "../../assets/business-owner.svg";
import { ReactComponent as jar } from "../../assets/drink-beer-jar.svg";
import { ReactComponent as merryMenImage } from "../../assets/merry-men.svg";

export const AboutPage = styled.div`
background-color: green ;
  width: 100vw;
  height: ${(props) => (props.device !== "large" ? "120vh" : "630px")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const AboutPageParent = styled.div`
  width: 100vw;
  height: 90%;
  display: flex;
  flex-direction: ${(props) => (props.device === "mobile" ? "column" : "row")};
`;

export const BarOwnerImage = styled(barOwnerImage)`
  width: 70%;
  height: 54%;
`;

export const BarOwnerIntro = styled.div`
  width: 70%;
  height: 40%;
  display: flex;
  flex-direction: column;
`;

export const OwnerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #ffba00;
  width: 200px;
  height: 40px;
  border-radius: 4px;
`;

export const BarOwner = styled.h2`
  text-align: left;
  font-family: regular Montserrat;
  color: #291563;
`;

export const Jar = styled(jar)``;

export const BarOwnerSolutio = styled.p`
  text-align: left;
  font-family: "PT Sans", sans-serif;
  color: #291563;
`;

export const ClickHereToBegin = styled.p`
  text-align: left;
  font-family: Semi Bold Montserrat;
  color: #ffba00;
  cursor: pointer;
`;

export const ImageAndTextHolder = styled.div`
  padding-left: 10%;
  margin-top: ${(props) => (props.device === "mobile" ? "10px" : "70px")};
  width: ${(props) => (props.device === "mobile" ? "100vw" : "50vw")};
  height: ${(props) => (props.device === "mobile" ? "50%" : "100%")};
  display: flex;
  flex-direction: column;
`;

export const MerryMenImage = styled(merryMenImage)`
  width: 70%;
  height: 54%;
  margin-right: 30%;
`;

export const MerryMenIntro = styled(BarOwnerIntro)`
  margin-right: 30%;
`;
