import { useFirebaseAuth } from "../context/firebaseAuthContext";
import firebase from "firebase/app";
import "firebase/auth";

export const useSignIn = () => {
  const auth = useFirebaseAuth()
  if (auth) {
    const provider = new firebase.auth.GoogleAuthProvider();
    return () =>
      auth.signInWithRedirect(provider);
  }
  return () => {};
};
