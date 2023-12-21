// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4AYfQUC1t8qWgkDN1j9SK4dseWQtnFDM",
  authDomain: "job-tesk-8.firebaseapp.com",
  projectId: "job-tesk-8",
  storageBucket: "job-tesk-8.appspot.com",
  messagingSenderId: "705964864668",
  appId: "1:705964864668:web:593426c8aca30ba3f6e959"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)