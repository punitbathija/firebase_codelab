/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyCDRWM0sdqMtrfdfruqdt906ytP5uVjgjM",
  authDomain: "chat-app-test-30496.firebaseapp.com",
  projectId: "chat-app-test-30496",
  storageBucket: "chat-app-test-30496.appspot.com",
  messagingSenderId: "1094617239905",
  appId: "1:1094617239905:web:955268b7c7be88e2abf520",
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}

// Import the functions you need from the SDKs you need
