import React from "react";
import { Outlet } from "react-router-dom";


import {
  InventoryParentDiv
} from "./inventory.dashboard.styled";



function InventoryDashboard() {
  return (
     <InventoryParentDiv >
       <Outlet />
    </InventoryParentDiv>
  );
}

export default InventoryDashboard;
