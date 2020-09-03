import React, { useEffect, useRef } from "react";
import { domSVG, drawArc, legend, management , dailyOps} from "./summaryForInventory";

import { PageSummary } from "../assets/iventory.styled";

function DataSummaryView(props) {
  let myRef = useRef(null);
  useEffect(() => {
    domSVG(myRef.current);
    switch (props.display) {
      case "inventory": {
        drawArc();
        legend();
        break;
      }
      case "management": {
        management();
        break;
      }
      case "dailyOps": {
        dailyOps();
        break;
      }
      default:
        break;
    }
  
  });
  return <PageSummary ref={myRef} />;
}

export default DataSummaryView;
