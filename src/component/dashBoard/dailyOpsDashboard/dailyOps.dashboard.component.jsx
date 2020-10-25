import React from "react";
import { DailyOpsFeaturesHolder, DailyOpsFeatures } from "./dailyOps.styled";
import CustomersComments from "./dailyOps/customersComments/customersComments.component";
import EmployeesOnDuty from "./dailyOps/employeesOnDuty/employeesOnDuty.component";
import ItemsSold from "./dailyOps/itemsSold/itemsSold.component";
import OrdersExecuted from "./dailyOps/ordersExecuted/ordersExecuted.component";
import OrdersPending from "./dailyOps/ordersPending/ordersPending.component";
import OrdersRecieved from "./dailyOps/ordersRecieved/ordersRecieved.component";
import PaidOrders from "./dailyOps/paidOrders/paidOrders.component";
import PendingPaymentOrders from "./dailyOps/pendingPaymentOrders/pendingPaymentOrders.component";
import Tables from "./dailyOps/tables/tables.component";
import { connect } from "react-redux";

function DailyOpsDashboard({ deviceType }) {
  return (
    <DailyOpsFeaturesHolder deviceType={deviceType}>
      <DailyOpsFeatures deviceType={deviceType}>
        <OrdersRecieved />
      </DailyOpsFeatures>
      <DailyOpsFeatures deviceType={deviceType}>
        <OrdersExecuted />
      </DailyOpsFeatures>
      <DailyOpsFeatures deviceType={deviceType}>
        <OrdersPending />
      </DailyOpsFeatures>
      <DailyOpsFeatures deviceType={deviceType}>
        <PaidOrders />
      </DailyOpsFeatures>
      <DailyOpsFeatures deviceType={deviceType}>
        <PendingPaymentOrders />
      </DailyOpsFeatures>
      <DailyOpsFeatures deviceType={deviceType}>
        <CustomersComments />
      </DailyOpsFeatures>
      <DailyOpsFeatures deviceType={deviceType}>
        <EmployeesOnDuty />
      </DailyOpsFeatures>
      <DailyOpsFeatures deviceType={deviceType}>
        <ItemsSold />
      </DailyOpsFeatures>
      <DailyOpsFeatures deviceType={deviceType}>
        <Tables />
      </DailyOpsFeatures>
    </DailyOpsFeaturesHolder>
  );
}

const mapStateToProps = (state) => {
  const { deviceType } = state.deviceType;
  return { deviceType };
};

export default connect(mapStateToProps)(DailyOpsDashboard);
