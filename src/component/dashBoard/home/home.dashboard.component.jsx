import React from 'react';
import {HomeParentDiv, HomeChildrenDiv } from './home.dashboard.styled'

function HomeDashboard() {
    const array = [0,1,2,3]
    const background = ["#6200EE", "#3700B3", "#03DAC6", "#018786", "#B00020", "#BB86FC", "#008B00","#C6F6AD"]
    return (
        <HomeParentDiv >
            { array.map((element) => <HomeChildrenDiv background={background[element]}/> )
            
            }
        </HomeParentDiv>
    )
}

export default HomeDashboard
