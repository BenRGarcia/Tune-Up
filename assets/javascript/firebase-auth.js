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

// Add realtime listener
initApp = function() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in
      console.log(`User is signed in`);
      // Get user info
      user.getIdToken().then(function(accessToken) {
        document.getElementById('account-details').textContent = JSON.stringify({
          displayName:   user.displayName,
          email:         user.email,
          emailVerified: user.emailVerified,
          phoneNumber:   user.phoneNumber,
          photoURL:      user.photoURL,
          uid:           user.uid,
          accessToken:   accessToken,
          providerData:  user.providerData
        }, null, '  ');
      });
    } else {
      // user is signed out
      console.log(`User is signed out`);
    }
  })
};