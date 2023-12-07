import React, { useEffect } from "react";
import { Auth, onAuthStateChanged } from "firebase/auth";
import * as firebaseui from "firebaseui";
import firebase from 'firebase/compat/app';

import "firebaseui/dist/firebaseui.css";

const ELEMENT_ID = "firebaseui_container";

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  callbacks: {
      signInSuccessWithAuthResult: () => false,
  },
};

function FirebaseAuth({ firebaseAuth}) {
  useEffect(() => {
    let userSignedIn = false;

    // Get or Create a firebaseUI instance.
    const firebaseUiWidget =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(firebaseAuth);

    if (uiConfig.signInFlow === "popup") firebaseUiWidget.reset();

    // We track the auth state to reset firebaseUi if the user signs out.
    const unregisterAuthObserver = onAuthStateChanged(firebaseAuth, (user) => {
      if (!user && userSignedIn) firebaseUiWidget.reset();
      userSignedIn = !!user;
    });

    // Render the firebaseUi Widget.
    firebaseUiWidget.start("#" + ELEMENT_ID, uiConfig);

    return () => {
      unregisterAuthObserver();
      firebaseUiWidget.reset();
    };
  }, [firebaseAuth]);

  return (<div id={ELEMENT_ID} />);
}

export default FirebaseAuth;