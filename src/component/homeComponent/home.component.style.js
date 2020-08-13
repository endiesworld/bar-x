import styled from "styled-components";
import { Link } from "react-scroll";
import { ReactComponent as Mug } from "../../assets/beer-mug.svg";
import { ReactComponent as X } from "../../assets/page-barx.svg";
import { ReactComponent as jar } from "../../assets/drink-beer-jar.svg";

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
  flex-direction: ${(props) => (props.device === "mobile" ? "column" : "row")};
  justify-content: space-between;
`;
export const AboutBarxHolder = styled.div`
  position: ${(props) => (props.device === "mobile" ? "absolute" : "relative")};
  width: ${(props) => (props.device === "mobile" ? "100%" : "50%")};
  height: ${(props) => (props.device === "mobile" ? "60%" : "100%")};
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.device === "mobile" ? "space-around" : "space-between"};
  top: ${(props) => (props.device === "mobile" ? "10%" : "0%")};
`;
export const AboutBarx = styled.div`
  position: relative;
  top: 15%;
  width: 100%;
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
  color: #ffffff;
  font-family: Regular "Montserrat";
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

export const Buttonholder = styled.div`
  height: 20%;
  width: 30%;
  min-width: 180px;
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 0.3%;
`;

export const BeerMugHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${(props) => (props.device === "mobile" ? "100%" : "50%")};
  height: 100%;
`;

export const BeerMug = styled(Mug)`
  position: relative;
  width: 75%;
  height: 70%;
  left: ${(props) => (props.device === "mobile" ? "10%" : "30%")};
  top: 15%;
`;

export const BusinessOwner = styled.div`
  position: relative;
  left: 40%;
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

export const OwnerHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffba00;
  width: 72%;
  height: ${(props) => (props.device === "mobile" ? "23%" : "35%")};
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
