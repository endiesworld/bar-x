import React, { useEffect, useRef } from "react";
import { domSVG, drawArc, legend, management } from "./summaryForInventory";

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
        management();
        break;
      }
      default:
        break;
    }
    //  if( props.inventory ) {
    //   drawArc();
    //   legend();
    //  }
    //  if(props.management){
    //   management() ;
    //  }
  });
  return <PageSummary ref={myRef} />;
}

export default DataSummaryView;
