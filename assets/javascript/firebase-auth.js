/**
 *  firebase-auth.js to contain all code with respect to user authentication.
 *  Users will log in with either GitHub or email/password.
 *  https://github.com/firebase/firebaseui-web
 *  https://www.youtube.com/watch?v=hb85pYZSJaI
 */

// FirebaseUI config.
var uiConfig = {
  signInSuccessUrl: 'https://benrgarcia.github.io/Tune-Up/virtual-garage',
  signInOptions: [
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);
