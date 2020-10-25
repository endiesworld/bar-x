import React from "react";
import {
  TaskBarParentDiv,
  TaskBarElementHolder,
  Link,
} from "./dashBoard.taskBar.styled";
import { dashBoardProperties, BusinessElement } from "../dashBoardTools";
import "../dashboard.css";

function TaskBar(props) {
  return (
    <TaskBarParentDiv
      background={props.background || dashBoardProperties.background}
      width={props.width}
    >
      {BusinessElement.map((element) => (
        <Link
          activeStyle={{
            fontWeight: "bold",
            color: "green",
            backgroundColor: "green",
          }}
          to={element.id}
          key={element.id}
        >
          <TaskBarElementHolder key={element.id}>
            {element.icon} {element.text}
          </TaskBarElementHolder>
        </Link>
      ))}
    </TaskBarParentDiv>
  );
}

export default TaskBar;
