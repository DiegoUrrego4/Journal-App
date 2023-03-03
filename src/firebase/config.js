// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAxKc84yiveACIwAUEcdRtQiM-IWMozjEA',
  authDomain: 'react-cursos-85d1f.firebaseapp.com',
  projectId: 'react-cursos-85d1f',
  storageBucket: 'react-cursos-85d1f.appspot.com',
  messagingSenderId: '248010659234',
  appId: '1:248010659234:web:010b2397ba31a47f130efb',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
