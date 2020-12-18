import {firestore } from "../firebase.util.store" ;

export const generateLPO = async (lpo) => {
    const {poNumber, poDate, uid} = lpo;
    const lpodata = {poNumber, poDate} ;
    const barprofile  = { lpo } ;
    const loadNewLPO = "inventory/generatedLPO/lpos/openlpos" ;
    const loadNewLPONumber = "inventory/generatedLPO/lpos/lpoNumbers" ;
    const lpodocRef = firestore.doc(`bars/${uid}/${loadNewLPO}`) ;
    const lpoNodocRef = firestore.doc(`bars/${uid}/${loadNewLPONumber}`) ;
   
  try { 
      await  lpodocRef.update( barprofile ) ;
 } catch (error) {
      alert(`could not generate new LPO ${error}` ) ;
  }

try { 
      await  lpoNodocRef.update( lpodata  ) ;
 } catch (error) {
      alert(`could not generate new LPO number ${error}` ) ;
  }

} ;

export const getBarDetails = async (firestore, authDetails) =>{
    let userDetails = await firestore.doc(`bars/${authDetails.uid}`).get()
    return userDetails ;

};