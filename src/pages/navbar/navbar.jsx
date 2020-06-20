import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'

export default function navbar() {
    return (
        <div>
            <nav>
                <div className="nav-parent-element">
                    <div className="bar-x">
                        <h2>BAR-X</h2>
                    </div>
                    <div className="hamburger">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <ul className="nav-links">
                        <Link to='/about'>
                            <li className="nav-link-item">About</li>
                        </Link>
                        <Link to='/contact'>
                            <li className="nav-link-item">Contact</li>
                        </Link>
                        <Link to='/signin'>
                            <li className="nav-link-item">Sign in</li>
                        </Link>
                        <Link to='/signup'>
                            <li className="nav-link-item">Sign up</li>
                        </Link>
                    </ul>
                </div>    
            </nav>
            
        </div>
    )
}
