import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6xbHHoS0-IiqlaMNV2QmLBZKjoNfA9SI",
  authDomain: "coder-reactjs-202312.firebaseapp.com",
  projectId: "coder-reactjs-202312",
  storageBucket: "coder-reactjs-202312.appspot.com",
  messagingSenderId: "685277225853",
  appId: "1:685277225853:web:cbd22004531e93a4c32214"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)