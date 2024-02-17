// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "furnitureproject-5934a.firebaseapp.com",
  projectId: "furnitureproject-5934a",
  storageBucket: "furnitureproject-5934a.appspot.com",
  messagingSenderId: "374917474210",
  appId: "1:374917474210:web:7e67594c19f7f869edb4fb",
  //   measurementId: "G-97XQ95KDW2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
