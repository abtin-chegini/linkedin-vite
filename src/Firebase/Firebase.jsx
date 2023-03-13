
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD4Owp3a3QyO8MAhAi09ap2o1mqNXj1zMY",
    authDomain: "linkedinchegi13.firebaseapp.com",
    projectId: "linkedinchegi13",
    storageBucket: "linkedinchegi13.appspot.com",
    messagingSenderId: "178625471504",
    appId: "1:178625471504:web:b1afd5157cfc0d99ac5695"
  };
    const firebaseApp = initializeApp(firebaseConfig);
    const db = getFirestore(firebaseApp);
    const authDomain = getAuth(firebaseApp);
    console.log(db);

    export  {db,authDomain,firebaseApp};