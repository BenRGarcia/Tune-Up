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
      document.getElementById('sign-in-status').textContent = 'Signed out';
      document.getElementById('sign-in').textContent = 'Sign in';
      document.getElementById('account-details').textContent = 'null';
    }
  }, function(error) {
    console.log(error);
  });
};

window.addEventListener('load', function() {
  initApp()
});