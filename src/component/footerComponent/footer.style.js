import styled from "styled-components";
import { ReactComponent as cee } from "../../assets/copyright.svg";

export const FooterHolder = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  height: 100%;
  margin-left: 30px;
`;

export const CopyRightIcon = styled(cee)`
  width: 25px;
  color: ${(props) => props.color};
`;

export const CopyRightText = styled.p`
  margin-left: 5px;
  text-align: left;
  font-family: "Montserrat";
  color: ${(props) => props.color || "#ffffff"};
  padding-right: 5px;
`;
