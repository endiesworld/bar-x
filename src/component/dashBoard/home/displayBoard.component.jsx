import React from 'react'
import {HomeChildrenDiv, Board, DisplaySubject, SummaryHolder} from "./home.dashboard.styled" ;

function DisplayBoard({display}) {
console.log(display) ;
    return (
        <HomeChildrenDiv>
            { (display !== "undefined") && (
                <Board>
                    <DisplaySubject>{display.icon} {display.text}</DisplaySubject>
                    <SummaryHolder>{display.synopsis}</SummaryHolder>
                </Board>
                
                
            )}
            
        </HomeChildrenDiv>
    )
}

export default DisplayBoard
