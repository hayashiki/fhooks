import firebase from "firebase/app";

interface firebaseConfig {
  apiKey: string;
  authDomain: string;
  databaseUrl?: string;
  projectId: string;
  storageBucket?: string;
  messagingSenderId?: string;
  appId?: string;
}


const initializeFirebase = (config: firebaseConfig): firebase.app.App => {
  return firebase.initializeApp(config);
};

export { initializeFirebase };
