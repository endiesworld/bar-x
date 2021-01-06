import {firestore } from "./firebase.util.store" ;

export const createNewUserProfile = async (newUserdetails, firebaseAuthDetails) => {
    const {barName, state, city, address, mobileNumber} = newUserdetails ;
    const {uid, email} = firebaseAuthDetails ;
    const createdOn = new Date() ;
   const barprofile  = { barDetails : {barName, email, state, city, address, mobileNumber, createdOn} } ;
  try { 
      await  firestore.doc(`bars/${uid}/bar/barContact`).set( barprofile );
 } catch (error) {
      alert(`could not update new user profile and ${error}` ) ;
  }
} ;

export const getBarDetails = async (uid) =>{
     return await firestore.doc(`bars/${uid}/bar/barContact`).get()
     .then((doc) => {
         return (doc.exists) ? doc.data().barDetails : undefined }
    ).catch(function(error) {
    alert("Error getting bar details:", error);
});
};