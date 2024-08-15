import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEyOVqJooeyra_nUe6DNOv41fK0kt60hs",
  authDomain: "project-5---f3-24.firebaseapp.com",
  databaseURL: "https://project-5---f3-24-default-rtdb.firebaseio.com",
  projectId: "project-5---f3-24",
  storageBucket: "project-5---f3-24.appspot.com",
  messagingSenderId: "168508702794",
  appId: "1:168508702794:web:429c34c324cf5d5881e6b3"
};

const app = initializeApp(firebaseConfig);
const dbFirebase = getDatabase(app);
const authFirebase = getAuth(app);

export { dbFirebase, authFirebase };