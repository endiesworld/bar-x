import React from "react";
import { HomeParentDiv } from "./home.dashboard.styled";
import DisplayBoard from "./displayBoard.component";
import { BusinessElement } from "../dashBoardTools";
import { connect } from "react-redux";

function HomeDashboard({ deviceType }) {
  const homeScreenProperies = BusinessElement.filter(
    (property) => property.id !== "home"
  );
  return (
    <HomeParentDiv deviceType={deviceType}>
      {homeScreenProperies.map((element) => (
        <DisplayBoard key={element.id} display={element} />
      ))}
    </HomeParentDiv>
  );
}

const mapStateToProps = (state) => {
  const { deviceType } = state.deviceType;
  return { deviceType };
};

export default connect(mapStateToProps)(HomeDashboard);
