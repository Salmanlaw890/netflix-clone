import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBslrKW5abQjLr9WC10eJNDTokXUaAyP38",
    authDomain: "netflix-clone-348ea.firebaseapp.com",
    projectId: "netflix-clone-348ea",
    storageBucket: "netflix-clone-348ea.appspot.com",
    messagingSenderId: "781497699335",
    appId: "1:781497699335:web:058e4e011fbacd121aaea2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

export { auth };
export default db;
