import styled from "styled-components";
import { Link } from "react-scroll";
import { ReactComponent as xlogo } from "../../../../assets/navbar-barx.svg";

export const Navbar = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 10vh;
  background-color: #ffffff;
  border-bottom: 5px solid #e8eaf6;
  z-index: 1;
  opacity: 1;
`;
export const NavbarLogoHolder = styled.div`
  width: 8%;
  height: 100%;
  margin-left: 1%;
  opacity: 1;
`;

export const Links = styled(Link)`
  height: 100%;
  width: 100%;
  text-decoration: none;
  cursor: pointer;
`;

export const Xlogo = styled(xlogo)`
  height: 7vh;
  margin-top: 5px;
  margin-left: 5%;
`;

export const Button = styled.button`
  height: 70%;
  background: #ffffff;
  border: 1px solid #291563;
  border-radius: 4px;
  margin-right: 3%;
  display: flex;
  align-items: center;
`;
export const ButtonText = styled.h2`
  font-size: 0.8rem;
  color: #291563;
  font-family: Regular "Montserrat";
`;
