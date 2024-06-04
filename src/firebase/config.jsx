import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCJmxV7ezLT8OBkiEOnMJNL_PoDkG5BdW4",
  authDomain: "minideveblogkayrocs.firebaseapp.com",
  projectId: "minideveblogkayrocs",
  storageBucket: "minideveblogkayrocs.appspot.com",
  messagingSenderId: "1037572408861",
  appId: "1:1037572408861:web:00be18b05a7aaa2a3068f4",
  measurementId: "G-7SJFY9N6LC"
};

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export {db}