import React from "react";
import {
  Message,
  LPO,
  Store,
  Refrigerator,
  Bar,
} from "./inventory.features.styled";



const generateLPO = {
  id: "Generate LPO",
  image: <LPO />,
  message: <Message>Generate LPO </Message>,
  linkTo: "generatelpo" ,

};

const lpoStatus = {
  id: "LPO status",
  image: <LPO />,
  message: <Message> Check L.P.Os status </Message>,
   linkTo: "lpostatus" ,
};

const updateLPOStatus = {
  id: "update status",
  image: <LPO />,
  message: <Message> Update L.P.Os status </Message>,
  linkTo: "updatelpostatus" ,
};

const receiveIntoStore = {
  id: "receive into store",
  image: <Store />,
  message: <Message> Receive items into store </Message>,
  linkTo: "receiveIntostore" ,
};

const takeOutFromStore = {
  id: "take out from store",
  image: <Store />,
  message: <Message>Remove items from store </Message>,
  linkTo: "takeoutfromstore",
};

const takeStoreStock = {
  id: "store stock",
  image: <Store />,
  message: <Message>take store stock </Message>,
  linkTo: "storestock",
};

const receiveIntoRefrigerator = {
  id: "receive into refrigerator",
  image: <Refrigerator />,
  message: <Message> Receive items into Refrigerator </Message>,
  linkTo: "receiveintorefrigerator",
};

const takeOutFromRefrigerator = {
  id: "take out from Refrigerator",
  image: <Refrigerator />,
  message: <Message>Remove items from refrigerator </Message>,
  linkTo: "takeoutfromrefrigerator",
};
const takeRefrigeratorStock = {
  id: "refrigerator stock",
  image: <Refrigerator />,
  message: <Message>take refrigerator stock </Message>,
  linkTo: "takerefrigeratorstock",
};

const receiveIntoBar = {
  id: "receive into bar",
  image: <Bar />,
  message: <Message> Receive items into the bar </Message>,
  linkTo: "receiveintobar",
};

const takeOutFromBar = {
  id: "take out from Bar",
  image: <Bar />,
  message: <Message>Remove items from bar </Message>,
  linkTo: "takeoutfrombar",
};

const takeBarStock = {
  id: "bar stock",
  image: <Bar />,
  message: <Message>take bar stock </Message>,
  linkTo: "barstock",
};

export const inventoryFeatures = [
  generateLPO,
  lpoStatus,
  updateLPOStatus,
  receiveIntoStore,
  takeOutFromStore,
  takeStoreStock,
  receiveIntoRefrigerator,
  takeOutFromRefrigerator,
  takeRefrigeratorStock,
  receiveIntoBar,
  takeOutFromBar,
  takeBarStock,
];
