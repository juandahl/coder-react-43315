import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "coderhouse-ecommerce-e6aa4.firebaseapp.com",
  projectId: "coderhouse-ecommerce-e6aa4",
  storageBucket: "coderhouse-ecommerce-e6aa4.appspot.com",
  messagingSenderId: "266512348273",
  appId: "1:266512348273:web:9de424c4fa83ecf10d17d0"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
