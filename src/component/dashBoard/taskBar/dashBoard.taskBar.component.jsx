import React from 'react'
import {TaskBarParentDiv, TaskBarElementHolder}  from "./dashBoard.taskBar.styled"
import {dashBoardProperties} from "../dashBoard";
import {taskBarElement} from "./taskBarElement" ;

function TaskBar() {
    return (
        <TaskBarParentDiv background={dashBoardProperties.background}>
            <TaskBarElementHolder/>
            {taskBarElement.map((element) =>( 
                <TaskBarElementHolder>{element.icon} {element.text}</TaskBarElementHolder>))
            }
        </TaskBarParentDiv>
    )
}

export default TaskBar
