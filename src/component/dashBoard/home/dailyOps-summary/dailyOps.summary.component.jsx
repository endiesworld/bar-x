import React from "react";
import { DailyOpsSummaryHolder } from "./dailyOps-summary.styled";
import DataSummaryView from "../../dataVisualization/data.summary";

function ManagementSummary() {
  return (
    <DailyOpsSummaryHolder>
      <DataSummaryView display="dailyOps" />
    </DailyOpsSummaryHolder>
  );
}

export default ManagementSummary;
