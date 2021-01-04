import {firestore } from "../firebase.util.store" ;

const lpoDirectory = {
    dataDirectory : "inventory/generatedLPO/lpos/openlpos" ,
    numberDirectory : "inventory/generatedLPO/lpos/lpoNumbers" 
}

const setFunction = async (lpoDocRef, lpoData, lpoNumberDocRef, lpoNumber) => {
    try { 
      await  lpoDocRef.set( lpoData ) ;
 } catch (error) {
      alert(`could not generate new LPO ${error}` ) ;
  }
    try { 
      await  lpoNumberDocRef.set( lpoNumber ) ;
 } catch (error) {
      alert(`could not generate new LPO number ${error}` ) ;
  }
}

const updateFunction = async (lpoDocRef, lpoData, lpoNumberDocRef, lpoNumber) => {
    try { 
      await  lpoDocRef.update( lpoData ) ;
 } catch (error) {
      alert(`could not generate new LPO ${error}` ) ;
  }
    try { 
      await  lpoNumberDocRef.update( lpoNumber ) ;
 } catch (error) {
      alert(`could not generate new LPO number ${error}` ) ;
  }
}

export const generateLPO = async (lpo) => {
    const {poNumber, poDate, uid, vendorCompanyName, totalAmount} = lpo;
    const numberOfLpoGenerated = parseInt(poNumber)
    const lpodata =  {[numberOfLpoGenerated]: {poNumber, poDate, vendorCompanyName, totalAmount} } ;
    const generatedLpo  =  { [poNumber]: lpo }  ;
    const lpodocRef = firestore.doc(`bars/${uid}/${lpoDirectory.dataDirectory}`) ;
    const lpoNodocRef = firestore.doc(`bars/${uid}/${lpoDirectory.numberDirectory}`) ;
    (poNumber === "00001") ? setFunction(lpodocRef, generatedLpo, lpoNodocRef, lpodata)
     : updateFunction(lpodocRef, generatedLpo, lpoNodocRef, lpodata)
} ;

export const getlpoNumbers = async (uid) =>{
    let lpoNumbers ;
     await firestore.doc(`bars/${uid}/${lpoDirectory.numberDirectory}`).get() 
     .then((result)=> {
      lpoNumbers = result.data() ;
     }) 
return (lpoNumbers) ? lpoNumbers : {} ;
};