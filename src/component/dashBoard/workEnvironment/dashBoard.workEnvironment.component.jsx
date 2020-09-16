import React from "react";
import { WorkEnvironmentDiv } from "./dashBoard.workEnvironment.styled";
import HomeDashboard from "../home/home.dashboard.component";
import { Routes, Route } from "react-router-dom";
import InventoryDashboard from "../inventoryDashboard/inventory.dashboard.component";
import ItemMenueDashboard from "../item-menueDashboard/item-menue.dashboard.component";
import ManagementDashboard from "../managementDashboard/management.dashboard.component";
import DailyOpsDashboard from "../dailyOpsDashboard/dailyOps.dashboard.component";

function WorkEnvironment() {
  return (
    <WorkEnvironmentDiv>
      <Routes>
        <Route path="/" element={<HomeDashboard />} />
        <Route path="/home" element={<HomeDashboard />} />
        <Route path="/inventory" element={<InventoryDashboard />} />
        <Route path="/itemsMenue" element={<ItemMenueDashboard />} />
        <Route path="/management" element={<ManagementDashboard />} />
        <Route path="/dailyOps" element={<DailyOpsDashboard />} />
      </Routes>
    </WorkEnvironmentDiv>
  );
}

export default WorkEnvironment;
