import React from 'react' ;
import { InventorySummary} from "./assets/iventory.styled" ;




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
    synopsis: < InventorySummary />
}

const itemsMenue = {
    id: "itemsMenue" ,
    icon: <span role="img" aria-label="menue">📋 </span> ,
    text:  <span>items/Menue</span> ,
    synopsis: ""
}

const management = {
    id: "management" ,
    icon: <span role="img" aria-label="management"> 💼 </span> ,
    text: <span>management</span>,
    synopsis: ""
}

const dailyOps = {
    id: "dailyOps" ,
    icon: <span role="img" aria-label="management"> 📖 </span>  ,
    text: <span>Daily Ops </span> ,
    synopsis: ""
}
export const BusinessElement = [home, inventory, itemsMenue, management, dailyOps];