import React from "react";
import {
  TaskBarParentDiv,
  TaskBarElementHolder,
  Link,
  TaskBarCloser
} from "./dashBoard.taskBar.styled";
import { BusinessElement } from "../dashBoardTools";
import { connect } from "react-redux";
import SignOut from "../../signOut/signOut.component"

function TaskBar({deviceType, background, textColor, width, flipTaskBar}) {
    return (
    <TaskBarParentDiv
      background={background }
      width={width}
    >
      
       {(deviceType !== "large") &&
       <TaskBarCloser onClick = {() => flipTaskBar()} > &#9747; </TaskBarCloser>
      }
      {BusinessElement.map((element) => (
        <Link
          activeStyle={{
            fontWeight: "bold",
            color: "green",
            backgroundColor: "green",
          }}
          to={element.linkTo}
          key={element.id}
        >
          <TaskBarElementHolder color = {textColor} key={element.id}>
            {element.icon} {element.text}
          </TaskBarElementHolder>
        </Link>
      ))}
      <SignOut />
    </TaskBarParentDiv>
  );
}

const mapStateToProps = (state) => {
  const { deviceType } = state.deviceType ;
  return { deviceType };
};

export default connect(mapStateToProps)(TaskBar);

