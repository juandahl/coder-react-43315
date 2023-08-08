import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXcIpQrfQCGVLBahPJrl0tTdQfSm3NgRg",
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
