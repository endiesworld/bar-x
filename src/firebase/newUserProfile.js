export const createNewUserProfile = async (newUserdetails, fireStore, firebaseAuthDetails) => {

    const {barName, state, city, address, mobileNumber} = newUserdetails ;
    const {uid, email} = firebaseAuthDetails ;
    const createdOn = new Date() ;
   const barprofile  = { barDetails : {barName, email, state, city, address, mobileNumber, createdOn} } ;

  try { 
      await  fireStore.doc(`bars/${uid}`).set( barprofile );
 } catch (error) {
      alert(`could not update new user profile and ${error}` ) ;
  }
} ;

export const getBarDetails = async (firestore, authDetails) =>{
    let userDetails = await firestore.doc(`bars/${authDetails.uid}`).get()
    return userDetails ;

};