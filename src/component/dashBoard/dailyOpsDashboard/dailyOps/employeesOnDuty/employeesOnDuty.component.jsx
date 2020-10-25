import React, { useState, useEffect } from "react";
import { OrderStyled, OrderParent, OrderTitle } from "../dailyOps.styled";

function EmployeesOnDuty() {
  const [employeesOnDuty, setEmployeesOnDuty] = useState(0);
  useEffect(() => {
    setEmployeesOnDuty(0);
  }, []);
  return (
    <OrderParent>
      <OrderStyled>{employeesOnDuty}</OrderStyled>
      <OrderTitle> employees on duty</OrderTitle>
    </OrderParent>
  );
}

export default EmployeesOnDuty;
