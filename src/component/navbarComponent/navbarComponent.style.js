import styled from "styled-components";
import { Link } from "react-scroll";

import { ReactComponent as xlogo } from "../../assets/navbar-barx.svg";

export const Navbar = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.backgroundColor || "#ffffff"};
  z-index: 1;
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
  height: 40px;
  margin-top: 5px;
  margin-left: 5%;
`;

export const Buttonholder = styled.div`
  height: 70%;
  width: 150px ;
  min-width: 150px;
  text-decoration: none;
  cursor: pointer;
 `;
