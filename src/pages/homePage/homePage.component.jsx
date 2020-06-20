import React from 'react'
import Navbar from '../navbar/navbar'
import About from '../about/about.page'
import Contact from '../contact/contact.component'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

export default function Homepage() {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path='/' exact >
                        <Home page='Home'/>
                    </Route>    
                    <Route path='/about' exact >
                        <About page='About'/>
                    </Route>    
                    <Route path='/contact' exact>
                        <Contact page='Contact'/>
                    </Route>    
                </Switch>
                
            </div>
        </Router>
        
    )
}

function Home({page}){
   return(
        <div>
            <h1> welcome to bar-x {page} </h1>
        </div>
   )
}
