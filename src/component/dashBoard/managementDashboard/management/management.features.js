import React from "react";
import {
  Message,
  Employees,
  Waiters,
  BusinessPerformance,
  CustomersReview,
  EmployeePerformance,
  IncidenceDamages,
  Maintenance,
  RevenueExpenses,
  SalesReport,
} from "./management.features.styled";

const employeeData = {
  id: "employeeData",
  message: <Message>employee list/data </Message>,
  image: <Employees />,
};

const employeesOnDuty = {
  id: "roaster",
  message: <Message>duty roaster</Message>,
  image: <Waiters />,
};

const employeePerformance = {
  id: "employeePerformance",
  message: <Message>employee performance record </Message>,
  image: <EmployeePerformance />,
};

const businessPerformance = {
  id: "businessPerformance",
  message: <Message>business health</Message>,
  image: <BusinessPerformance />,
};

const salesReport = {
  id: "salesReport",
  message: <Message>sales report and history </Message>,
  image: <SalesReport />,
};

const revenueAndExpenses = {
  id: "revenueAndExpenses",
  message: <Message>revenues and expenses </Message>,
  image: <RevenueExpenses />,
};

const maintenance = {
  id: "maintenance",
  message: <Message>maintenance record </Message>,
  image: <Maintenance />,
};

const incidenceAndDamages = {
  id: "incidenceAndDamages",
  message: <Message>incidence/damages record </Message>,
  image: <IncidenceDamages />,
};

const customerReview = {
  id: "customerReview",
  message: <Message>customers review and ratings </Message>,
  image: <CustomersReview />,
};

export const managementFeatures = [
  employeeData,
  employeePerformance,
  employeesOnDuty,
  businessPerformance,
  salesReport,
  revenueAndExpenses,
  maintenance,
  incidenceAndDamages,
  customerReview,
];
