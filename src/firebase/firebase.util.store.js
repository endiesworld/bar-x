import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import {createNewUserProfile} from "./newUserProfile" ;
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  export const auth = firebase.auth() ;
  export const firestore = firebase.firestore() ;
  

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({'login_hint': 'user@example.com'});
  //export const googleSigninWithRedirect = () => auth.signInWithRedirect(provider);
  //export const googleSigninWithPupup = () => auth.signInWithPopup(provider);
  export const signUp = async (newUserDetails) => {
    await auth.createUserWithEmailAndPassword(newUserDetails.email, newUserDetails.password)
    .then( (response) => createNewUserProfile(newUserDetails, response.user) )
  .catch(function(error) {
  // Handle Errors here.
    alert("Unable to sign you up, email already in use by another user") ;
   // ...
});
 
  } ;
 export const signIn = (email, password) =>  auth.signInWithEmailAndPassword(email, password)
 .catch(function(error) {
  // Handle Errors here.
  alert("User name or password does not exist") ;
  // ...
});


export const signOut = () => auth.signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});
  export default firebase ;

