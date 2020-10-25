import React, { useState, useEffect } from "react";
import { OrderStyled, OrderParent, OrderTitle } from "../dailyOps.styled";

function OrdersPendingPayment() {
  const [order, setOrder] = useState(0);
  useEffect(() => {
    setOrder(0);
  }, []);
  return (
    <OrderParent>
      <OrderStyled>{order}</OrderStyled>
      <OrderTitle>orders yet to be paid for </OrderTitle>
    </OrderParent>
  );
}

export default OrdersPendingPayment;
