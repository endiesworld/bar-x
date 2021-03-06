import React from "react";
import {
  ManagementSummaryHolder,
  ManagementIcon,
  LabelHolder,
} from "./management-summary.styled";
import DataSummaryView from "../../homeDataVisualization/data.summary";

function ManagementSummary() {
  return (
    <ManagementSummaryHolder>
      <ManagementIcon />
      <LabelHolder>
        <DataSummaryView display="management" />
      </LabelHolder>
    </ManagementSummaryHolder>
  );
}

export default ManagementSummary;
