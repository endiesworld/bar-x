import React, { useState, useEffect } from "react";

import { NameHolder, Text, TaskHolder } from "./barName.styled";
import Taskbar from "../dashBoard/taskBar/dashBoard.taskBar.component";
import { connect } from "react-redux";

function BarName({ deviceType, backgroundColor, user, textColor }) {
 
 const {barName} = user.user ;
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
      <Text textColor={textColor}> { barName ||  "company Name"}</Text>
      {deviceType.deviceType !== "large" && (
        <TaskHolder taskBarState={taskBarState}>
          <Taskbar flipTaskBar = {flipTaskBar} width="100%" background = {backgroundColor} textColor={textColor}/>
        </TaskHolder>
      )}
    </NameHolder>
  );
}

const mapStateToProps = (state) => {
  const { deviceType , user} = state ;
  return { deviceType, user };
};

export default connect(mapStateToProps)(BarName);
