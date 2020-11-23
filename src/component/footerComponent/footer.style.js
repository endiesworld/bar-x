import styled from "styled-components";
import { ReactComponent as cee } from "../../assets/copyright.svg";

export const FooterHolder = styled.div`
  display: flex;
  height: 5%;
  align-items: center;
  justify-content: center;
`;

export const CopyRightIcon = styled(cee)`
  width: 20px;
  color: ${(props) => props.color};
`;

export const CopyRightText = styled.p`
  margin-left: 5px;
  text-align: left;
  color: ${(props) => props.color || "#291563"};
`;
