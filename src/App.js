import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MomentumMate from './MomentumMate';
import React, { useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Configure firebase
const config = {
  apiKey: "AIzaSyDQ4CmqdCIUmyIQ43XERngK881wZTxK2SM",
  authDomain: "momentum-mate.firebaseapp.com",
  databaseURL: "https://momentum-mate-default-rtdb.firebaseio.com",
  projectId: "momentum-mate",
  storageBucket: "momentum-mate.appspot.com",
  messagingSenderId: "1066402884490",
  appId: "1:1066402884490:web:08d4fee6cce28894e47673",
  measurementId: "G-X05K1FCMMQ"
};
firebase.initializeApp(config);

// Configure FirebaseUI
const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  callbacks: {
      signInSuccessWithAuthResult: () => false,
  },
};


function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
            setIsSignedIn(!!user);
        });
        return () => unregisterAuthObserver();
    }, []);

    if (!isSignedIn) {
      return (
          <div style={{height: '100vh'}} className='d-flex align-items-center justify-content-center'>
            <div className='w-25 signin-box d-flex align-items-center flex-column justify-content-center'>
                <img alt='mani' src='mani-login.png'></img>
                <p className='mt-2 p-2'>Please sign-in with your University of Michigan Google account to use <strong>Momentum Mate</strong></p>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>
          </div>
      );
    } else {
      return <MomentumMate user={firebase.auth().currentUser}/>
    }

}

export default App;
