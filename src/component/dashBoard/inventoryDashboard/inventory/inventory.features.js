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
};

const lpoStatus = {
  id: "LPO status",
  image: <LPO />,
  message: <Message> Check L.P.Os status </Message>,
};

const updateLPOStatus = {
  id: "update status",
  image: <LPO />,
  message: <Message> Update L.P.Os status </Message>,
};

const receiveIntoStore = {
  id: "receive into store",
  image: <Store />,
  message: <Message> Receive items into store </Message>,
};

const takeOutFromStore = {
  id: "take out from store",
  image: <Store />,
  message: <Message>Remove items from store </Message>,
};

const takeStoreStock = {
  id: "store stock",
  image: <Store />,
  message: <Message>take store stock </Message>,
};

const receiveIntoRefrigerator = {
  id: "receive into Refrigerator",
  image: <Refrigerator />,
  message: <Message> Receive items into Refrigerator </Message>,
};

const takeOutFromRefrigerator = {
  id: "take out from Refrigerator",
  image: <Refrigerator />,
  message: <Message>Remove items from refrigerator </Message>,
};
const takeRefrigeratorStock = {
  id: "refrigerator stock",
  image: <Refrigerator />,
  message: <Message>take refrigerator stock </Message>,
};

const receiveIntoBar = {
  id: "receive into bar",
  image: <Bar />,
  message: <Message> Receive items into the bar </Message>,
};

const takeOutFromBar = {
  id: "take out from Bar",
  image: <Bar />,
  message: <Message>Remove items from bar </Message>,
};

const takeBarStock = {
  id: "bar stock",
  image: <Bar />,
  message: <Message>take bar stock </Message>,
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
