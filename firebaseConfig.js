// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import 'firebase/firestore'; // Importa Firestore si aún no lo has hecho

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
  

const app = initializeApp(firebaseConfig);

export default app;
