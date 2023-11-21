import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

//en este archivo se encuentra la configuracion de las api keys de google fire base

const firebaseConfig = {
  apiKey: "AIzaSyB27lB-PsFMTgbOXv16MVjtfN1aux-8bzA",
  authDomain: "proyecto-bti-8a32c.firebaseapp.com",
  projectId: "proyecto-bti-8a32c",
  storageBucket: "proyecto-bti-8a32c.appspot.com",
  messagingSenderId: "506038556598",
  appId: "1:506038556598:web:aa8ddf834c374f0ab81317"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);