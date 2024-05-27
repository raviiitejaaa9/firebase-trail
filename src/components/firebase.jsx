// Import the functions you need from the SDKs you need
// import firebase from "firebase/compat/app";
import "firebase/auth"
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHNZm5RFvkOFkq69zqWHia41i2JkhutdM",
  authDomain: "fir-trail-4b0b9.firebaseapp.com",
  projectId: "fir-trail-4b0b9",
  storageBucket: "fir-trail-4b0b9.appspot.com",
  messagingSenderId: "274766166119",
  appId: "1:274766166119:web:a9a18709a142652adebcc2",
  measurementId: "G-6HCLXZWSQY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth()
export const analytics = getAnalytics(app);
export default app
export {logEvent}