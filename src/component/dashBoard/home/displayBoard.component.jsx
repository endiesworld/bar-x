import React from "react";
import { connect } from "react-redux";

import {
  HomeChildrenDiv,
  Board,
  DisplaySubject,
  SummaryHolder,
} from "./home.dashboard.styled";

import DataSummary from "./dataSummary.component";

function DisplayBoard({ display, deviceType }) {
  return (
    <HomeChildrenDiv deviceType={deviceType}>
      {display !== "undefined" && (
        <Board>
          <DisplaySubject>
            {display.icon} {display.text}
          </DisplaySubject>
          <SummaryHolder>
            <DataSummary display={display.id} />
          </SummaryHolder>
        </Board>
      )}
    </HomeChildrenDiv>
  );
}

const mapStateToProps = (state) => {
  const { deviceType } = state.deviceType;
  return { deviceType };
};

export default connect(mapStateToProps)(DisplayBoard);
