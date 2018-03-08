// Add realtime listener
initApp = function() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in
      console.log(`User is signed in`);
      // Get user info
      user.getIdToken().then(function(accessToken) {
        document.getElementById('account-details').textContent = JSON.stringify({
          // email:         user.email,
          // emailVerified: user.emailVerified,
          // phoneNumber:   user.phoneNumber,
          // photoURL:      user.photoURL,
          // accessToken:   accessToken,
          // providerData:  user.providerData
          displayName:   user.displayName,
          uid:           user.uid
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

// Object to return 'uid' for use with firebase db
const userData = {
  retrieveUid() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        return user.uid
      } else {
        console.log(`firebase-user.js says: "Cannot retrieve uid, user not logged in"`);
      }
    });
  },
  retrieveName() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        return user.displayName
      } else {
        console.log(`firebase-user.js says: "Cannot retrieve displayName, user not logged in"`);
      }
    });
  }
};

/* // Sample data available for firebase auth ui user:
{ 
  "displayName": "Ben Garcia", 
  "email": "ben@seebenprogram.com", 
  "emailVerified": false, 
  "phoneNumber": null, 
  "photoURL": "https://avatars3.githubusercontent.com/u/26657982?v=4", 
  "uid": "I9QtY5OfJLdgqLuzD6QWBcKHcCG2", 
  "accessToken": "eyJhbGciOiJSU...", 
  "providerData": [ 
    { 
      "uid": "26657982", 
      "displayName": "Ben Garcia", 
      "photoURL": "https://avatars3.githubusercontent.com/u/26657982?v=4", 
      "email": "ben@seebenprogram.com", 
      "phoneNumber": null, 
      "providerId": "github.com" 
    } 
  ] 
}
*/