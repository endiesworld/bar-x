import React from "react";

export const dashBoardProperties = {
  background:  "#F5F5F5",
  buttonBackground: "#291563",
  textColor: "#ffffff",
};

// WORK ENVINRONMENT OPTIONS

const home = {
  id: "home",
  linkTo: "" ,
  icon: (
    <span role="img" aria-label="home">
      {" "}
      🏠{" "}
    </span>
  ),
  text: (
    <h2 style={{ paddingLeft: "0.5em", display: "inline", fontSize: "0.8em" }}>
      {" "}
      home{" "}
    </h2>
  ),
};

const inventory = {
  id: "inventory",
  linkTo: "inventory" ,
  icon: (
    <span role="img" aria-label="folder">
      {" "}
      📂{" "}
    </span>
  ),
  text: (
    <h2 style={{ display: "inline", fontSize: "0.8em", paddingLeft: "0.5em" }}>
      Inventory
    </h2>
  ),
};

const itemsMenue = {
  id: "itemsMenue",
   linkTo: "itemsMenue" ,
  icon: (
    <span role="img" aria-label="menue">
      📋{" "}
    </span>
  ),
  text: (
    <h2 style={{ paddingLeft: "0.5em", display: "inline", fontSize: "0.8em" }}>
      items/Menue
    </h2>
  ),
};

const management = {
  id: "management",
  linkTo: "management" ,
  icon: (
    <span role="img" aria-label="management">
      {" "}
      💼{" "}
    </span>
  ),
  text: (
    <h2 style={{ paddingLeft: "0.5em", display: "inline", fontSize: "0.8em" }}>
      management
    </h2>
  ),
};

const dailyOps = {
  id: "dailyOps",
  linkTo: "dailyOps" ,
  icon: (
    <span role="img" aria-label="management">
      {" "}
      📖{" "}
    </span>
  ),
  text: (
    <h2 style={{ paddingLeft: "0.5em", display: "inline", fontSize: "0.8em" }}>
      Daily Ops{" "}
    </h2>
  ),
};
export const BusinessElement = [
  home,
  inventory,
  itemsMenue,
  management,
  dailyOps,
];
