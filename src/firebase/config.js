// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Dev prod
// const firebaseConfig = {
//   apiKey: 'AIzaSyAxKc84yiveACIwAUEcdRtQiM-IWMozjEA',
//   authDomain: 'react-cursos-85d1f.firebaseapp.com',
//   projectId: 'react-cursos-85d1f',
//   storageBucket: 'react-cursos-85d1f.appspot.com',
//   messagingSenderId: '248010659234',
//   appId: '1:248010659234:web:010b2397ba31a47f130efb',
// };

// Testing
const firebaseConfig = {
  apiKey: "AIzaSyAknpUgTN1eUNB0XPvd-7_D8cjBEh4QHcg",
  authDomain: "testing-d7693.firebaseapp.com",
  projectId: "testing-d7693",
  storageBucket: "testing-d7693.appspot.com",
  messagingSenderId: "612395336260",
  appId: "1:612395336260:web:1395e911d1a1ee502db211"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);


