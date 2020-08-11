import React from "react";

import {
  HomeChildrenDiv,
  Board,
  DisplaySubject,
  SummaryHolder,
} from "./home.dashboard.styled";

import DataSummary from "./dataSummary.component";

function DisplayBoard({ display }) {
  console.log(display.id);
  return (
    <HomeChildrenDiv>
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

export default DisplayBoard;
