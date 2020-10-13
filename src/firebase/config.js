import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA-ktjYPbD4Dv0OynR-VXu48MpPE5EDuww",
    authDomain: "create-your-list-app.firebaseapp.com",
    databaseURL: "https://create-your-list-app.firebaseio.com",
    projectId: "create-your-list-app",
    storageBucket: "create-your-list-app.appspot.com",
    messagingSenderId: "933064717456",
    appId: "1:933064717456:web:af50d9e29c6fb85a6f5415",
    measurementId: "G-81BN17S9WF"
  };
  
  if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
  }
  
  export { firebase };