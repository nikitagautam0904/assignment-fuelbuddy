import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
 apiKey: "AIzaSyCqXfbQPoJRU-eqnisITwCx3Q9JgYNilaQ",
  authDomain: "fuelbuddy-7d597.firebaseapp.com",
  projectId: "fuelbuddy-7d597",
  storageBucket: "fuelbuddy-7d597.appspot.com",
  messagingSenderId: "140191613145",
  appId: "1:140191613145:web:fd62f4c931463221d9bec8",
  measurementId: "G-80EFTDKXWK"
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }