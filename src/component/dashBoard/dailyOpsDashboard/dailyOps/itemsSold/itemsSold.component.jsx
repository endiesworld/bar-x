import React, { useState, useEffect } from "react";
import { OrderStyled, OrderParent, OrderTitle } from "../dailyOps.styled";

function ItemsSold() {
  const [itemsSold, setItemsSold] = useState(0);
  useEffect(() => {
    setItemsSold(0);
  }, []);
  return (
    <OrderParent>
      <OrderStyled>{itemsSold}</OrderStyled>
      <OrderTitle>items sold for today</OrderTitle>
    </OrderParent>
  );
}

export default ItemsSold;
