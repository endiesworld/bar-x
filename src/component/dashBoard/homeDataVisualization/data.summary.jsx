import React, { useEffect, useRef } from "react";
import { drawArc } from "./summaryForInventory";
import { management } from "./summaryForManagement";
import { dailyOps } from "./summaryForDailyOps";
import { PageSummary } from "../assets/iventory.styled";
import D3SVGViewPortGenerator from "./createViewPortNode";
import { connect } from "react-redux";
import { d3ChildnodeGenerator } from "./d3ChildnodeGenerator";

function DataSummaryView({ display, deviceType }) {
  let myRef = useRef(null);

  useEffect(() => {
    let viewport = new D3SVGViewPortGenerator(
      d3ChildnodeGenerator(myRef.current)
    );

    switch (display) {
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
    return () => {
      viewport.remove();
    };
  }, [display, deviceType]);
  return (
    <>
      <PageSummary ref={myRef} />
    </>
  );
}

const mapStateToProps = (state) => {
  const { deviceType } = state.deviceType;
  return { deviceType };
};

export default connect(mapStateToProps)(DataSummaryView);
