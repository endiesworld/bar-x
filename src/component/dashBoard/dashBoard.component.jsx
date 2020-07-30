import React from 'react'
import {WorkenvironmentParentDiv} from "./dashBoard.styled" ;
import TaskBar from "./taskBar/dashBoard.taskBar.component" ;
import WorkEnvironment from "./workEnvironment/dashBoard.workEnvironment.component" ;

function DashBoard() {
    return (
        <WorkenvironmentParentDiv>
            <TaskBar/>
            <WorkEnvironment />
            
        </WorkenvironmentParentDiv>
    )
}

export default DashBoard
