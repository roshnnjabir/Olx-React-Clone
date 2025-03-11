import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider } from 'firebase/auth';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APP_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()


export const login = async (email, password) => {
  try {
    const auth = getAuth();

    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Login Error: ", error);
    throw error;
  }
};
