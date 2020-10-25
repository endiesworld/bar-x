import React, { useState, useEffect } from "react";
import { OrderStyled, OrderParent, OrderTitle } from "../dailyOps.styled";

function OrdersRecieved() {
  const [order, setOrder] = useState(0);
  useEffect(() => {
    setOrder(0);
  }, []);
  return (
    <OrderParent>
      <OrderStyled>{order}</OrderStyled>
      <OrderTitle>orders recieved</OrderTitle>
    </OrderParent>
  );
}

export default OrdersRecieved;
