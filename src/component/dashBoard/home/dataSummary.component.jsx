import React from "react";

import ItemsAndMenue from "./item-menue-Summary/items-menue.summary.component";
import ManagementSummary from "./management-summary/management.summary.component";
import DailyOpsSummary from "./dailyOps-summary/dailyOps.summary.component";
import DataSummaryView from "../dataVisualization/data.summary";

function DataSummary(props) {
  switch (props.display) {
    case "inventory":
      return <DataSummaryView display="inventory" />;

    case "itemsMenue":
      return <ItemsAndMenue />;

    case "management":
      return <ManagementSummary />;

    case "dailyOps":
      return <DailyOpsSummary />;

    default:
      return <div> No data for this view</div>;
  }
}

export default DataSummary;
