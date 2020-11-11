import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

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
  export const signUp = (email, password) => auth.createUserWithEmailAndPassword(email, password)
  .catch(function(error) {
  // Handle Errors here.
  console.log("sign up error", error.code );
    console.log("sign up error", error.message );
   // ...
});

 export const signIn = (email, password) =>  auth.signInWithEmailAndPassword(email, password)
 .catch(function(error) {
  // Handle Errors here.
  console.log("sign in error", error.code );
    console.log("sign in error", error.message );
  // ...
});


export const signOut = () => auth.signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});
  export default firebase ;

