import React from "react";
import {
  TaskBarParentDiv,
  TaskBarElementHolder,
  Link,
} from "./dashBoard.taskBar.styled";
import { BusinessElement } from "../dashBoardTools";
import SignOut from "../../signOut/signOut.component"

function TaskBar(props) {
  return (
    <TaskBarParentDiv
      background={props.background }
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
          <TaskBarElementHolder color = {props.textColor} key={element.id}>
            {element.icon} {element.text}
          </TaskBarElementHolder>
        </Link>
      ))}
      <SignOut />
    </TaskBarParentDiv>
  );
}

export default TaskBar;
