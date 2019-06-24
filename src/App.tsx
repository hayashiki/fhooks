import React, { useEffect, useState, createContext } from 'react';
import logo from './logo.svg';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import './App.css';
import { History } from "history";
import { FirebaseAuthContext } from "./context/firebaseAuthContext";
import { Authenticated } from "./components/Authenticated";

const AppContext = createContext(null);
const App = ({
  firebaseApp,
  history
}:{
  firebaseApp: firebase.app.App;
  history: History 
}) => {

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user: any) => {
      console.log(user)
    })
  })
  
  const firebaseAuth = firebaseApp.auth();
  const [user, setUser] = useState(null)
  const appState: AppState = {
    user,
    firebaseAuth,
    firestore: firebaseApp.firestore(),
  };
  return (
    <FirebaseAuthContext.Provider value={firebase.auth()}>
      <Authenticated />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </FirebaseAuthContext.Provider>
  );
}

interface AppState {
  user: firebase.auth.Auth | null;
  firebaseAuth: firebase.auth.Auth
  firestore: firebase.firestore.Firestore;
}

export default App;
