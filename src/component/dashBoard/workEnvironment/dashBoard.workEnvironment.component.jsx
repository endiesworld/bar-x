import React from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import { WorkEnvironmentDiv } from "./dashBoard.workEnvironment.styled";
import HomeDashboard from "../home/home.dashboard.component";
import InventoryDashboard from "../inventoryDashboard/inventory.dashboard.component";
import ItemMenueDashboard from "../item-menueDashboard/item-menue.dashboard.component";
import ManagementDashboard from "../managementDashboard/management.dashboard.component";
import DailyOpsDashboard from "../dailyOpsDashboard/dailyOps.dashboard.component";
import InventoryHome from "../inventoryDashboard/inventory/inventory.home.component" ;
import LpoStatus from "../inventoryDashboard/inventory/LPO/check_lpo_status/lpo_status.component" ;
import GenerateLPO from "../inventoryDashboard/inventory/LPO/generate_lpo/generate_lpo.form" ;


function WorkEnvironment({ deviceType }) {
  return (
    <WorkEnvironmentDiv deviceType={deviceType}>
      {" "}
      <Routes>
        <Route path="/" element={<HomeDashboard />} />
        <Route path="/home" element={<HomeDashboard />} />
        <Route path="/inventory" element={<InventoryDashboard />} >
          <Route path="generatelpo" element={ <GenerateLPO />} />
          <Route path="lpostatus" element={ <LpoStatus />} />
          <Route path="/" element={<InventoryHome />} />
        </Route >  
        <Route path="/itemsMenue" element={<ItemMenueDashboard />} />
        <Route path="/management" element={<ManagementDashboard />} />
        <Route path="/dailyOps" element={<DailyOpsDashboard />} />
      </Routes>
    </WorkEnvironmentDiv>
  );
}

const mapStateToProps = (state) => {
  const { deviceType } = state.deviceType;
  return { deviceType };
};

export default connect(mapStateToProps)(WorkEnvironment);
