import React from "react";

import ItemsAndMenue from "./item-menue-Summary/items-menue.summary.component" ;
import ManagementSummary from "./management-summary/management.summary.component" ;
import DataSummaryView from "../dataVisualization/data.summary"

function DataSummary(props) {
  switch (props.display) {
    case "inventory":
      return <DataSummaryView inventory = "invetory"/>;

    case "itemsMenue":
      return <ItemsAndMenue />;

    case "management":
      return <ManagementSummary />;

    case "dailyOps":
      return <div>dailyOps data yet to be loaded</div>;

    default:
      return <div> No data for this view</div>;
  }
}

export default DataSummary;
