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
    // measurementId: "G-6SS2MF5K16"
  };
  //saving a user into db passing userAuth object that we receive when googleSignIn...we ALWAYS recieve an object back but it might be empty
  export const createUserProfileDocument = async ( userAuth, additionalData) => {
    if(!userAuth) {
       console.log('does not exist')
       return;
    }
    //if does exist then query the db
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get()
    
    //or create a new user
    if(!snapshot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
       
        try {
            const userRefSet = { //another firestore method for creating a user
                displayName,
                email,
                createdAt,
                ...additionalData
            };
            
            await userRef.set(userRefSet)

        }catch (err) {
            console.log('error creating a user', err.message)
        }
    }
    return userRef;
  }

  export const addCollectionAndDocuments = async(collectionName, objectsToAdd) => {
    const collectionRef= firestore.collection(collectionName) //we're calling for the collection object which firebase returns even if it's empty.
    console.log(collectionRef, 'COLLECTIONREFFFFFFFFFFFF', objectsToAdd, "OBJECT?????") //now we will start to populate the collection with objects/items one at the time as doc with multiple calls gathered in one batch
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc()//method to make firestore assign an id to each genereated object in the db collection, for each item
        batch.set(newDocRef, obj) //now we're assiginig the value of our object item to each doc created in db in order to save it. batch method will group these calls into a queues for us authomaticly
    })
     //now we need to commit the calls to db
    return await batch.commit()
  }

  export const convertCollectionSnapshotToMap = (collections) => {
      const transformedCollections = collections.docs.map(doc => {
          const { title, items } = doc.data() //this method gets the actual value of the documentRef 
          return {
              routeName: encodeURI(title.toLowerCase()),
              id: doc.id,
              title,
              items
          }
      })
      
      return transformedCollections.reduce((accumulator, collection) => {
          accumulator[collection.title.toLowerCase()] = collection;
          return accumulator;
      }, {})
  }

  firebase.initializeApp(config);
  //configuration neccesary for google auth

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const googleProvider = new firebase.auth.GoogleAuthProvider(); //from firebase library for google auth
  googleProvider.setCustomParameters({ prompt: 'select_account' }); //makes a pop up with google acc to choose from, provider is a class
  
  export default firebase;


