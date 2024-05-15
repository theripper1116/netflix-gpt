// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxhby4bTqmy1q-EQhqvvQTj9_QWgvnE7s",
  authDomain: "netflix-gpt-49584.firebaseapp.com",
  projectId: "netflix-gpt-49584",
  storageBucket: "netflix-gpt-49584.appspot.com",
  messagingSenderId: "313494585477",
  appId: "1:313494585477:web:0e9364821c079dff5369ec",
  measurementId: "G-HF0NQJ58HF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
