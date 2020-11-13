export const createNewUserProfile = async (newUserdetails, fireStore, firebaseAuthDetails) => {

    const {barName, state, city, address, mobileNumber} = newUserdetails ;
    const {uid, email} = firebaseAuthDetails ;
    const createdOn = new Date() ;

  try { 
      await  fireStore.doc(`bars/${uid}`).set(
    { barDetails : {
    barName: barName,
    email: email,
    phoneNumber: mobileNumber,
    state: state,
    city: city,
    address: address,
    registeredOn: createdOn
  }});
 } catch (error) {
      console.log(`could not update new user profile and ${error}` ) ;
  }
}

export const getBarDetails = async (firestore, authDetails) =>{
    let userDetails = await firestore.doc(`bars/${authDetails.uid}`).get()
    return userDetails ;

}