import React, { useEffect, useRef } from "react";
import { drawArc} from "./summaryForInventory";
import {management } from "./summaryForManagement";
import { dailyOps} from "./summaryForDailyOps";
import { PageSummary } from "../assets/iventory.styled";
import D3SVGViewPortGenerator from "./createViewPortNode" ;

function DataSummaryView(props) {
  let myRef = useRef(null);
  useEffect(() => {
  let viewport = new D3SVGViewPortGenerator(myRef.current) ;
  viewport.svgDOMProcessor() ;
  
    switch (props.display) {
      case "inventory": {
        drawArc(viewport);
        break;
      }
      case "management": {
        management(viewport);
        break;
      }
      case "dailyOps": {
        dailyOps(viewport);
        break;
      }
      default:
        break;
    }
  
  });
  return <PageSummary ref={myRef} />;
}

export default DataSummaryView;
