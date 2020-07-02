import styled from "styled-components";
import { Link } from "react-scroll";
import { ReactComponent as Mug } from "../../../assets/beer-mug.svg";
import { ReactComponent as X } from "../../../assets/page-barx.svg";
import { ReactComponent as jar } from "../../../assets/drink-beer-jar.svg";

export const HomePageParentDiv = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const HomePageBackground = styled.div`
  background-color: #291563;
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const BarxAndBeerMugHolder = styled.div`
  width: 100vw;
  height: 93%;
  display: flex;
  justify-content: space-between;
`;
export const AboutBarxHolder = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const AboutBarx = styled.div`
  position: relative;
  top: 15%;
  width: 70%;
  height: 55%;
  display: flex;
  flex-direction: column;
`;

export const Barx = styled.div`
  margin-top: 3%;
  width: 70%;
  height: 15%;
  display: flex;
  margin-left: 10%;
  align-items: center;
`;
export const WriteBar = styled.h2`
  font-family: Regular "Montserrat";
  color: #ffffff;
`;

export const XLogo = styled(X)``;
export const Service = styled.p`
  margin-left: 5%;
  color: #ffffff;
`;

export const AboutTheCompany = styled.div`
  position: relative;
  bottom: 5%;
  width: 80%;
  height: 70%;
  margin-left: 10%;
`;

export const AboutBarxWriteUp = styled.h2`
  text-align: left;
  font-family: Regular "Montserrat";
  color: #ffffff;
`;
export const Experience = styled.span`
  color: #ffba00;
`;
export const Break = styled.br``;
export const RegisterButton = styled.button`
  height: 19%;
  background: #ffffff;
  border: 1px solid #291563;
  border-radius: 4px;

  display: flex;
  align-items: center;
`;

export const ButtonText = styled.h2`
  font-size: 0.9rem;
  color: #291563;
  font-family: Regular "Montserrat";
`;

export const BeerMugHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  height: 100%;
`;

export const BeerMug = styled(Mug)`
  position: relative;
  width: 75%;
  height: 70%;
  left: 30%;
  top: 15%;
`;

export const BusinessOwner = styled.div`
  position: relative;
  left: 45%;
  width: 55%;
  height: 20%;
`;

export const MerryMenHolder = styled(BusinessOwner)`
  left: 10%;
`;

export const Links = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

export const SolutionButton = styled.button`
  height: 35px;
  background: #ffffff;
  border: 1px solid #291563;
  border-radius: 4px;
  font-family: Regular "Montserrat";
  display: flex;
  align-items: center;
`;

export const OwnerHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffba00;
  width: 70%;
  height: 35%;
`;

export const BarOwner = styled.h2`
  font-size: 0.8rem;
  text-align: left;
  font-family: "Montserrat";
  color: #291563;
`;

export const Jar = styled(jar)`
  margin-left: 3%;
  height: 70%;
`;

export const BarOwnerSolutio = styled.p`
  text-align: left;
  font-family: "Montserrat";
  color: #fff;
  padding-right: 5px;
`;
