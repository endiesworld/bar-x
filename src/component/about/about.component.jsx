import React from 'react'
import './about.component.styles.scss'

function AboutComponent({page}) {
    return (
        <div className= 'about-page'>
            <h1>welcome to bar-x {page}</h1>
        </div>
    )
}

export default AboutComponent

