import React from "react";

export const dashBoardProperties = {
  background: "#F5F5F5",
  buttonBackground: "#291563",
  textColor: "#ffffff",
};

// WORK ENVINRONMENT OPTIONS

const home = {
  id: "home",
  icon: (
    <span role="img" aria-label="home">
      {" "}
      🏠{" "}
    </span>
  ),
  text: <h2 style={{ display: "inline", fontSize: "0.8em" }}> home </h2>,
};

const inventory = {
<<<<<<< HEAD
    id: "iventory" ,
    icon: <span role="img" aria-label="folder"> 📂 </span> ,
    text: <span>Iventory</span>,
    
}
||||||| merged common ancestors
    id: "iventory" ,
    icon: <span role="img" aria-label="folder"> 📂 </span> ,
    text: <span>Iventory</span>,
    synopsis: IventorySynopsis
}
=======
  id: "inventory",
  icon: (
    <span role="img" aria-label="folder">
      {" "}
      📂{" "}
    </span>
  ),
  text: <h2 style={{ display: "inline", fontSize: "0.8em" }}>Inventory</h2>,
};
>>>>>>> 05fe90cb0387d6505bc08760e7c3672180d9a42f

const itemsMenue = {
  id: "itemsMenue",
  icon: (
    <span role="img" aria-label="menue">
      📋{" "}
    </span>
  ),
  text: <h2 style={{ display: "inline", fontSize: "0.8em" }}>items/Menue</h2>,
};

const management = {
  id: "management",
  icon: (
    <span role="img" aria-label="management">
      {" "}
      💼{" "}
    </span>
  ),
  text: <h2 style={{ display: "inline", fontSize: "0.8em" }}>management</h2>,
};

const dailyOps = {
  id: "dailyOps",
  icon: (
    <span role="img" aria-label="management">
      {" "}
      📖{" "}
    </span>
  ),
  text: <h2 style={{ display: "inline", fontSize: "0.8em" }}>Daily Ops </h2>,
};
export const BusinessElement = [
  home,
  inventory,
  itemsMenue,
  management,
  dailyOps,
];
