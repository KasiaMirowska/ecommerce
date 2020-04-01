import firebase from 'firebase/app';
import 'firebase/firestore'; //for database
import 'firebase/auth'; //for authentication


const config = {
    apiKey: "AIzaSyAvZb8PsjokOEf4AC16V0613SHcH7ESYeI",
    authDomain: "crown-db-3ccd2.firebaseapp.com",
    databaseURL: "https://crown-db-3ccd2.firebaseio.com",
    projectId: "crown-db-3ccd2",
    storageBucket: "crown-db-3ccd2.appspot.com",
    messagingSenderId: "506711171270",
    appId: "1:506711171270:web:b0f9c788f57944529637c7",
    measurementId: "G-6SS2MF5K16"
  };

  firebase.initializeApp(config);
  //configuration neccesary for google auth

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider(); //from firebase library for google auth
  provider.setCustomParameters({ prompt: 'select_account' }); //makes a pop up with google acc to choose from, provider is a class
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;


