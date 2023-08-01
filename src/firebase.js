
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLFaa9JSDivR9nVWbVuHKWI4-VqVDUDPw",
    authDomain: "realtor-4dff8.firebaseapp.com",
    projectId: "realtor-4dff8",
    storageBucket: "realtor-4dff8.appspot.com",
    messagingSenderId: "527747806917",
    appId: "1:527747806917:web:17bf9997cc615243de62ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()