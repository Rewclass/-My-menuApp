import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcXECvfXRSRVZIaOTZ4CeqQZgdfl4HS_Q",
  authDomain: "news-appmovil.firebaseapp.com",
  databaseURL: "https://news-appmovil-default-rtdb.firebaseio.com",
  projectId: "news-appmovil",
  storageBucket: "news-appmovil.appspot.com",
  messagingSenderId: "291589250977",
  appId: "1:291589250977:web:18345d48524448845ef5e0"
};
 
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

// Apply experimentalForceLongPolling setting
db.settings({ experimentalForceLongPolling: true });

export { auth, db };
