import React, { useEffect, useRef } from "react";
import {
  DOMSVG,
  drawArc,
  legend,
} from "../dataVisualization/summaryForInventory";

import ItemsAndMenue from "./item-menue-Summary/items-menue.summary.component" ;

import { PageSummary } from "../assets/iventory.styled";

function IventorySynopsis() {
  let myRef = useRef(null);
  useEffect(() => {
    DOMSVG(myRef.current);
    drawArc();
    legend();
  });
  return <PageSummary ref={myRef} />;
}

function DataSummary(props) {
  switch (props.display) {
    case "inventory":
      return <IventorySynopsis />;

    case "itemsMenue":
      return <ItemsAndMenue />;

    case "management":
      return <div>management data yet to be loaded</div>;

    case "dailyOps":
      return <div>dailyOps data yet to be loaded</div>;

    default:
      return <div> default</div>;
  }
}

export default DataSummary;
