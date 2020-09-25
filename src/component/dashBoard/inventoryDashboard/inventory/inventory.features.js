import React from 'react'


const generateLPO = {
    id: "Generate LPO",
    message: <h2>Generate LPO </h2>
}

const lpoStatus = {
    id: "LPO status",
    message: <h2> check L.P.Os status </h2>
}

const changeLPOStatus = {
    id: "LPO status",
    message: <h2> update L.P.Os status </h2>
}

const receiveIntoStore = {
    id: "receive into store",
    message: <h2> receive items into store </h2>
}

const takeOutFromStore = {
    id: "take out from store",
    message: <h2>take items out from store </h2> 
}

const takeStoreStock = {
    id: "store stock",
    message: <h2>take stock of items in the store </h2> 
}

const receiveIntoRefrigerator = {
    id: "receive into Refrigerator",
    message: <h2> receive items into Refrigerator </h2>  
}

const takeOutFromRefrigerator = {
    id: "take out from Refrigerator",
    message: <h2>take items out from the refrigerator </h2>
}
const takeRefrigeratorStock = {
    id: "refrigerator stock",
    message: <h2>take stock of items in the refrigerator </h2> 
}

const receiveIntoBar = {
    id: "receive into bar",
    message: <h2> receive items into the bar </h2>
}

const takeOutFromBar = {
    id: "take out from Bar",
    message: <h2>take items out from the bar </h2> 
}

const takeBarStock = {
    id: "refrigerator stock",
    message: <h2>take stock of items in the bar </h2> 
}

export const inventoryFeature = [generateLPO, lpoStatus, changeLPOStatus,
        receiveIntoStore, takeOutFromStore,
takeStoreStock, receiveIntoRefrigerator, takeOutFromRefrigerator,
takeRefrigeratorStock, receiveIntoBar, takeOutFromBar, takeBarStock] ;