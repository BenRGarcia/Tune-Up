// Add realtime listener
initApp = function() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in
      console.log(`Logged in user: displayName = '${user.displayName}', uid = '${user.uid}'`);
    } else {
      // user is signed out
      console.log(`User is signed out`);
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
  _name: null,
  _uid: null,
  get getUid() {
    return this._uid
  },
  get getName() {
    return this._name
  },
  retrieveUid() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        return this._uid = user.uid;
      } else {
        console.log(`firebase-user.js says: "Cannot retrieve uid, user not logged in"`);
      }
    }, function(error) {
      console.log(error);
    });
  },
  retrieveName() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        return this._name = user.displayName;
      } else {
        console.log(`firebase-user.js says: "Cannot retrieve displayName, user not logged in"`);
      }
    }, function(error) {
      console.log(error);
    });
  }
};

/* // Sample data available for firebase auth ui user:
{ 
  "displayName": "Ben...", 
  "email": "ben@email.com", 
  "emailVerified": false, 
  "phoneNumber": null, 
  "photoURL": "https://avatars3.gith...", 
  "uid": "I9QtY5OfJLdgqLuz...", 
  "accessToken": "eyJh.....................", 
  "providerData": [ 
    { 
      "uid": "26......", 
      "displayName": "Ben...", 
      "photoURL": "https://avatars3.gith...", 
      "email": "ben@email.com", 
      "phoneNumber": null, 
      "providerId": "github.com" 
    } 
  ] 
}
*/