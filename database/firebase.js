import firebase from 'firebase/app';
import app from 'firebase/app';
import firebaseConfig from './config';

class Firebase {

  constructor(){
    if (!app.getApps.length){
      app.initializeApp(firebaseConfig)

    }
  }

}

const firebase = new Firebase();

export default firebase;


// import 'firebase/firestore';
// import 'firebase/auth';
// import { getReactNativePersistence } from 'firebase/auth';
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBdHVy-T8ncnXQ3i7Hlmqcehm_iix_Dsqo",
//   authDomain: "expon-myapp.firebaseapp.com",
//   projectId: "expon-myapp",
//   storageBucket: "expon-myapp.appspot.com",
//   messagingSenderId: "433049491768",
//   appId: "1:433049491768:web:7d97c51b0a575ac683c9cd"
// };

// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);

// // Initialize Firebase Auth with AsyncStorage
// const auth = firebase.auth();
// auth.setPersistence(getReactNativePersistence(ReactNativeAsyncStorage))
//   .then(() => console.log('Firebase Auth persistence set with AsyncStorage'))
//   .catch(error => console.error('Error setting Firebase Auth persistence:', error));

// const db = firebase.firestore();

// export default {
//   firebase,
//   db,
//   auth
// };
