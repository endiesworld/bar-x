import React, { useState, useEffect } from "react";
import { OrderStyled, OrderParent, OrderTitle } from "../dailyOps.styled";

function Tables() {
  const [tables, setTables] = useState(0);
  useEffect(() => {
    setTables(0);
  }, []);
  return (
    <OrderParent>
      <OrderStyled>{tables}</OrderStyled>
      <OrderTitle>tables occupied</OrderTitle>
    </OrderParent>
  );
}

export default Tables;
