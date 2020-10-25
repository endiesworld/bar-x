import React, { useState, useEffect } from "react";
import { OrderStyled, OrderParent, OrderTitle } from "../dailyOps.styled";

function CustomersComments() {
  const [comments, commentsCount] = useState(0);
  useEffect(() => {
    commentsCount(0);
  }, []);
  return (
    <OrderParent>
      <OrderStyled>{comments}</OrderStyled>
      <OrderTitle>customers present</OrderTitle>
    </OrderParent>
  );
}

export default CustomersComments;
