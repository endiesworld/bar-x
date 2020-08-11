import React,{ useRef, useEffect} from 'react' ;
import { PageSummary} from "./assets/iventory.styled" ;
import {DOMSVG, drawArc} from "./dataVisualization/summaryForInventory" ;

//import { ReactComponent as InventorySummary } from "./assets/home.iventory.svg";



export const dashBoardProperties = {
    background: "#F5F5F5" ,
    buttonBackground: '#291563',
    textColor: "#ffffff"
  }

  // WORK ENVINRONMENT OPTIONS

  const home = {
    id: "home" ,
    icon:  <span role="img" aria-label="home"> 🏠 </span> ,
    text: <span> home </span>
}

const inventory = {
    id: "iventory" ,
    icon: <span role="img" aria-label="folder"> 📂 </span> ,
    text: <span>Iventory</span>,
    synopsis: function  () {
        console.log("iventory")
        let myRef = useRef(null) ;
       useEffect(()=> {
            DOMSVG(myRef.current) ;
            drawArc() ;
        }) ;
        return < PageSummary ref = {myRef}  />
    }
}

const itemsMenue = {
    id: "itemsMenue" ,
    icon: <span role="img" aria-label="menue">📋 </span> ,
    text:  <span>items/Menue</span> ,
    synopsis: <PageSummary />
}

const management = {
    id: "management" ,
    icon: <span role="img" aria-label="management"> 💼 </span> ,
    text: <span>management</span>,
    synopsis: <PageSummary />
}

const dailyOps = {
    id: "dailyOps" ,
    icon: <span role="img" aria-label="management"> 📖 </span>  ,
    text: <span>Daily Ops </span> ,
    synopsis: <PageSummary />
}
export const BusinessElement = [home, inventory, itemsMenue, management, dailyOps];

function IventorySynopsis () {
    console.log("iventory")
    let myRef = useRef(null) ;
   useEffect(()=> {
        DOMSVG(myRef.current) ;
        drawArc() ;
    }) ;
    return < PageSummary ref = {myRef}  />
}