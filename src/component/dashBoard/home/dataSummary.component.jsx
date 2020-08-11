import React, { useEffect, useRef } from "react";
import {
  DOMSVG,
  drawArc,
  legend,
} from "../dataVisualization/summaryForInventory";
import { PageSummary } from "../assets/iventory.styled";

function IventorySynopsis() {
  console.log("iventory");
  let myRef = useRef(null);
  useEffect(() => {
    DOMSVG(myRef.current);
    drawArc();
    legend();
  });
  return <PageSummary ref={myRef} />;
}

function DataSummary(props) {
  // return <IventorySynopsis />;
  switch (props.display) {
    case "inventory":
      return <IventorySynopsis />;

    case "itemsMenue":
      return <div>item/menue data yet to be loaded</div>;

    case "management":
      return <div>management data yet to be loaded</div>;

    case "dailyOps":
      return <div>dailyOps data yet to be loaded</div>;

    default:
      return <div> default</div>;
  }
}

export default DataSummary;
