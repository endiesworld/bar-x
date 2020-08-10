import React from 'react';
import {HomeParentDiv} from './home.dashboard.styled' ;
import DisplayBoard from "./displayBoard.component" ;
import {BusinessElement } from "../dashBoardTools" ;


function HomeDashboard() {
    
    const homeScreenProperies = BusinessElement.filter((property) => property.id !== "home") ;
    return (
        <HomeParentDiv >
            { homeScreenProperies.map((element) => 
            <DisplayBoard key = {element.id} display ={element}/> )
            
            }
        </HomeParentDiv>
    )
}

export default HomeDashboard
