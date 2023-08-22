import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDdVJNJ0xAb4qEAZp63JKEeQZwH9uirutc",
  authDomain: "fuelbuddy-74ff9.firebaseapp.com",
  projectId: "fuelbuddy-74ff9",
  storageBucket: "fuelbuddy-74ff9.appspot.com",
  messagingSenderId: "298310773488",
  appId: "1:298310773488:web:7776245551988bc2817035",
  measurementId: "G-JHLDE3QBYH"
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }