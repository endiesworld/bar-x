import React from "react";
import {
  TaskBarParentDiv,
  TaskBarElementHolder,
  Link,
} from "./dashBoard.taskBar.styled";
import { dashBoardProperties, BusinessElement } from "../dashBoardTools";

function TaskBar() {
  return (
    <TaskBarParentDiv background={dashBoardProperties.background}>
      {BusinessElement.map((element) => (
        <Link to={element.id}>
          <TaskBarElementHolder key={element.id}>
            {element.icon} {element.text}
          </TaskBarElementHolder>
        </Link>
      ))}
    </TaskBarParentDiv>
  );
}

export default TaskBar;
