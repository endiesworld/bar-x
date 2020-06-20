import React from 'react'
import {useHistory, useParams, useRouteMatch} from 'react-router-dom'
import AboutComponent from '../../component/about/about.component'
import './about.style.scss'

export default function ABOUT({page}) {
    let history = useHistory();
    let params = useParams() ;
    let match = useRouteMatch(); 
    console.log(history) ;
    console.log(params) ;
    console.log(match) ;

    return (
        <div>
            <AboutComponent  page = {page}/>
        </div>
    )
}