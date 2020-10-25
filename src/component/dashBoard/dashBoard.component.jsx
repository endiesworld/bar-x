import React from "react";
import { WorkenvironmentParentDiv } from "./dashBoard.styled";
import TaskBar from "./taskBar/dashBoard.taskBar.component";
import WorkEnvironment from "./workEnvironment/dashBoard.workEnvironment.component";
import { connect } from "react-redux";

function DashBoardComponent({ deviceType }) {
  return (
    <div>
      <WorkenvironmentParentDiv deviceType={deviceType}>
        {deviceType === "large" && <TaskBar />}
        <WorkEnvironment />
      </WorkenvironmentParentDiv>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { deviceType } = state.deviceType;
  return { deviceType };
};

export default connect(mapStateToProps)(DashBoardComponent);
