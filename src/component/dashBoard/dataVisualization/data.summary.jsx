import React, { useEffect, useRef } from "react";
import {
  DOMSVG,
  drawArc,
  legend,
  management,
} from "./summaryForInventory";




import { PageSummary } from "../assets/iventory.styled";

function DataSummaryView(props) {
  let myRef = useRef(null);
  useEffect(() => {
    DOMSVG(myRef.current);
   if( props.inventory ) {
    drawArc();
    legend();
   } 
   if(props.management){
    management() ;
   }

  });
  return <PageSummary ref={myRef} />;
}

export default DataSummaryView ;
