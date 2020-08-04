import React from 'react'
import {TaskBarParentDiv, TaskBarElementHolder}  from "./dashBoard.taskBar.styled"
import {dashBoardProperties, BusinessElement} from "../dashBoardTools";


function TaskBar() {
    return (
        <TaskBarParentDiv background={dashBoardProperties.background}>
            <TaskBarElementHolder/>
            {BusinessElement.map((element) =>( 
                <TaskBarElementHolder key = {element.id}>{element.icon} {element.text}</TaskBarElementHolder>))
            }
        </TaskBarParentDiv>
    )
}

export default TaskBar
