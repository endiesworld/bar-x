import React from "react";
import { InventorySummaryHolder } from "./inventory-summary.styled";
import DataSummaryView from "../../homeDataVisualization/data.summary";

function InventorySummary() {
  return (
    <InventorySummaryHolder>
      <DataSummaryView display="inventory" />
    </InventorySummaryHolder>
  );
}

export default InventorySummary;
