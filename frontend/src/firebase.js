// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGi0o-Jq-4WEsqlhK_dKAOSDvht9Ht7vs",
  authDomain: "connect-dev-988e9.firebaseapp.com",
  projectId: "connect-dev-988e9",
  storageBucket: "connect-dev-988e9.appspot.com",
  messagingSenderId: "809612946978",
  appId: "1:809612946978:web:7678bbd490bcd39b23647b",
  measurementId: "G-7D2C8PDKZ3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const storage = getStorage(app);
