import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAGmJpAUTONrMwk7nHpcGfVbueF4gaqHJE",
  authDomain: "fitness-app-23226.firebaseapp.com",
  projectId: "fitness-app-23226",
  storageBucket: "fitness-app-23226.firebasestorage.app",
  messagingSenderId: "920573646207",
  appId: "1:920573646207:web:7418f7f6b33aaffedc764a"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)