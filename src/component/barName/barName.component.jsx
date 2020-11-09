import React, { useState, useEffect } from "react";

import { NameHolder, Text, TaskHolder } from "./barName.styled";
import Taskbar from "../dashBoard/taskBar/dashBoard.taskBar.component";
import { connect } from "react-redux";

function BarName({ deviceType, backgroundColor, name, textColor }) {
  const taskBar = {
    mobileView: "block",
    wideScreen: "none",
  };
  const [taskBarState, setTaskBarState] = useState(taskBar.wideScreen);
  const flipTaskBar = () => {
    if (deviceType !== "large" && taskBarState === taskBar.wideScreen)
      setTaskBarState(taskBar.mobileView);
    else setTaskBarState(taskBar.wideScreen);
  };

  useEffect(() => {
    window.addEventListener("resize", setTaskBarState(taskBar.wideScreen));
  }, [deviceType, taskBar.wideScreen]);

  return (
    <NameHolder backgroundColor={backgroundColor} onClick={() => flipTaskBar()}>
      <Text textColor={textColor}> {name || "company Name"} </Text>
      {deviceType !== "large" && (
        <TaskHolder taskBarState={taskBarState}>
          <Taskbar width="150px" background = {backgroundColor} textColor={textColor}/>
        </TaskHolder>
      )}
    </NameHolder>
  );
}

const mapStateToProps = (state) => {
  const { deviceType } = state.deviceType;
  return { deviceType };
};

export default connect(mapStateToProps)(BarName);
