import styled from "styled-components";
import { ReactComponent as lpo } from "../../../../assets/purchase-order.svg";
import { ReactComponent as store } from "../../../../assets/cart-arrow-down-solid.svg";
import { ReactComponent as bar } from "../../../../assets/cocktail-solid.svg";
import { ReactComponent as refrigerator } from "../../../../assets/refrigerator-slide.svg";

import { Link as link } from "react-router-dom";

export const InventoryFeaturesHolder = styled.div`
  margin-bottom: 2em;
  margin-top: 5em;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: ${(props) =>
    props.deviceType === "mobile" ? "1fr " : "1fr 1fr 1fr"};
  justify-items: center;
  align-items: center;
  row-gap: 15px;
  column-gap: 15px;
`;

export const InventoryFeatures = styled.div`
  background: #f5f5f5;
  cursor: pointer;
  width: ${(props) => (props.deviceType === "mobile" ? "60%" : "80%")};
  height: ${(props) => (props.deviceType === "mobile" ? "100px" : "120px")};
  max-height: 180px;
  max-width: 240px ;
  
`;

export const IconHolder = styled.div`
  width: ${(props) => (props.deviceType === "mobile" ? "50%" : "65%")};
  height: ${(props) => (props.deviceType === "mobile" ? "30%" : "35%")};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Link = styled(link)`
  text-decoration-line: none;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #291563;
  box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);
  :hover {
    box-shadow: 5px 5px 10px 7px #291563;
  }
`;

export const Message = styled.h2`
  margin-top: 1em;
  width: 80%;

  text-align: center;
`;

export const LPO = styled(lpo)`
  fill: #ffba00;
`;

export const Store = styled(store)`
  color: #ffba00;
`;

export const Refrigerator = styled(refrigerator)`
  color: #ffba00;
`;

export const Bar = styled(bar)`
  color: #ffba00;
`;
