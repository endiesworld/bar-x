import styled from "styled-components";

import { ReactComponent as barOwnerImage } from "../../assets/business-owner.svg";
import { ReactComponent as jar } from "../../assets/drink-beer-jar.svg";
import { ReactComponent as merryMenImage } from "../../assets/merry-men.svg";

export const AboutPageParent = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;
export const BusinessOwnerSide = styled.div`
  margin-top: 70px;
  width: 50vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 60%;
  height: 18%;
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

export const CustomerSide = styled.div`
  margin-top: 70px;
  width: 50vw;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const MerryMenImage = styled(merryMenImage)`
  width: 70%;
  height: 54%;
`;

export const MerryMenIntro = styled.div`
  align-self: center;
  width: 70%;
  height: 40%;
  display: flex;
  flex-direction: column;
`;
