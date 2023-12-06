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

function SignInScreen() {
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
            setIsSignedIn(!!user);
        });
        return () => unregisterAuthObserver();
    }, []);

    if (!isSignedIn) {
        return (
            <div className='signin-box'>
                <h1>Momentum Mate</h1>
                <p>Please sign-in</p>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>
        );
    } 
    return (
      <div>
        <p>Welcome {firebase.auth().currentUser.displayName}!</p>
        <a onClick={() => firebase.auth().signOut()}>Sign Out</a>
      </div>  
    )
}

export default SignInScreen;

