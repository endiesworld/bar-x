import styled from "styled-components";
import { Link } from "react-scroll";
import Mug from "../../assets/beer-mug.svg";
import { ReactComponent as X } from "../../assets/page-barx.svg";
import { ReactComponent as jar } from "../../assets/drink-beer-jar.svg";

export const HomePageParentDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #291563;
`;

export const HomePageBackground = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: url(${Mug}) no-repeat center fixed;
  background-size: 50vh 75vh;
`;

export const ContentHolder = styled.div`
  width: 100vw;
  height: 93%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const AboutBarx = styled.div`
  padding-top: 6em;
  width: 100%;
  height: ${(props) => (props.device === "mobile" ? "35%" : "50%")};
  display: flex;
  flex-direction: column;
`;

export const Barx = styled.div`
  width: 70%;
  height: 30%;
  display: flex;
  margin-left: 10%;
  align-items: center;
  min-width: 300px;
`;
export const WriteBar = styled.h2`
  color: #ffffff;
`;

export const XLogo = styled(X)`
  height: 70%;
  margin-right: 1%;
`;

export const AboutTheCompany = styled.div`
  position: relative;
  bottom: 5%;
  width: 80%;
  height: 70%;
  margin-left: 10%;
  min-width: 300px;
`;

export const BusinessOwnerAndMerryMen = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.device === "mobile" ? "column" : "row")};
  width: 100%;
  height: ${(props) => (props.device === "mobile" ? "50%" : "30%")};
  justify-content: space-around;
`;

export const Buttonholder = styled.div`
  height: 30%;
  width: 20%;
  min-width: 180px;
  text-decoration: none;
  cursor: pointer;
`;

export const BusinessOwner = styled.div`
  align-self: ${(props) =>
    props.device === "mobile" ? "flex-start" : "center"};
  width: ${(props) => (props.device === "mobile" ? "50%" : "30%")};
  height: ${(props) => (props.device === "mobile" ? "50%" : "75%")};
  min-width: 250px;
  margin-left: 8%;
  order: ${(props) => (props.device === "mobile" ? "2" : "1")};
  -ms-flex-order: ${(props) => (props.device === "mobile" ? "2" : "1")};
`;

export const MerryMenHolder = styled(BusinessOwner)`
  align-self: ${(props) => (props.device === "mobile" ? "flex-end" : "center")};
  -ms-flex-order: ${(props) => (props.device === "mobile" ? "1" : "2")};
  order: ${(props) => (props.device === "mobile" ? "1" : "2")};
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
  min-width: 145px;
  width: ${(props) => (props.device === "mobile" ? "80%" : "50%")};
  height: ${(props) => (props.device === "mobile" ? "20%" : "20%")};
  border-radius: 4px;
`;

export const BarOwner = styled.h2`
  font-size: 0.8rem;
  text-align: left;
  color: #291563;
`;

export const Jar = styled(jar)`
  margin-left: 3%;
  height: 70%;
`;

export const BarOwnerSolutio = styled.p`
  text-align: left;
  color: #fff;
  padding-right: 5px;
`;
