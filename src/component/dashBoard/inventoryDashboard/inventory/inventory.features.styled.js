import styled from "styled-components";
import { ReactComponent as lpo } from "../../../../assets/purchase-order.svg";
import { ReactComponent as store } from "../../../../assets/cart-arrow-down-solid.svg";
import { ReactComponent as bar } from "../../../../assets/cocktail-solid.svg";
import { ReactComponent as refrigerator } from "../../../../assets/refrigerator-slide.svg";

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
