import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const config = {
    apiKey: "AIzaSyA_BjXcekczb3jRrM49rxPSVd_8HYCCnGY",
    authDomain: "crown-db-3bcc5.firebaseapp.com",
    projectId: "crown-db-3bcc5",
    storageBucket: "crown-db-3bcc5.appspot.com",
    messagingSenderId: "297537427387",
    appId: "1:297537427387:web:336c65161fca7e349d169e",
    measurementId: "G-722C2CJR3M"
  };

const firebaseApp = initializeApp(config);

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

const signInWithGoogle = () => signInWithPopup(auth, provider);

export { auth, firestore, signInWithGoogle };
export default firebaseApp;