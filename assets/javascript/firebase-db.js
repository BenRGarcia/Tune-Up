/*
 *  firebase-db.js to contain all code with respect to the database.
 */

const db = {
  /* 
   *  Database refs 
   */
  _defMaintRef: firebase.database().ref('/defaultMaintenance'),
  _usersRef: firebase.database().ref('/users'),
  /* 
   *  Methods to retrieve data from the firebase db 
   */
  // Get the default maintenance schedule object
  get getDefMaint() {
    this._defMaintRef.once('value').then( function(snapshot) {
      console.log(`firebase-db.js getDefMaint says, 'snapshot:'`);
      console.log(snapshot.val());
      return snapshot.val();
    }, function(error) {
      console.log(error);
    })
  },
  // Get the 'last maintenance' object from the db
  getLastMaintenance(uid, carKey) {
    this._usersRef.child(uid).once('value').then( function(snapshot) {
      console.log(`firebase-db getLastMaintenance() says, "lastMaintenance object:"`);
      console.log(snapshot.child(carKey).lastMaintenance.val());
      return snapshot.child(carKey).lastMaintenance.val();
    }, function(error) {
      console.log(error);
    });
  },
  // Get the already-set 'maintenance intervals' for a specific vehicle
  getMaintenanceIntervals(uid, carKey) {
    this._usersRef.child(uid).once('value').then( function(snapshot) {
      console.log(`firebase-db getMaintenanceIntervals() says, "maintenanceInterval object:"`);
      console.log(snapshot.child(carKey).maintenanceInterval.val());
      return snapshot.child(carKey).maintenanceInterval.val();
    }, function(error) {
      console.log(error);
    });
  },
  // Get an object of all of the user's car object (an object of objects)
  getUsersCars(uid) {
    this._usersRef.child(uid).once('value').then( function(snapshot) {
      console.log(`firebase-db.js db.getUsersCars() says, "all car objects are:"`);
      console.log(snapshot.val());
      return snapshot.val();
    }, function(error) {
      console.log(error);
    });
  },
  getUsersCar(uid, carKey) {
    this._usersRef.child(uid).once('value').then( function(snapshot) {
      console.log(`firebase-db.js db.getUsersCar() says, "specific car object is:"`);
      console.log(snapshot.child(carKey).val());
      return snapshot.child(carKey).val();
    }, function(error) {
      console.log(error);
    });
  },
  /* 
   *  Methods to add/change data from the firebase db 
   */
  // User creates a new car object
  addNewCar(uid, year, make, model, mileage) {
    // Get maintenance defaults
    let maintenanceInterval = this.getDefMaint;
    // Convert mileage to number type
    let currentMileage = parseInt(mileage);
    // Get key from db
    let carKey = this._usersRef.push().key;
    // Assemble new car object
    let newCar = {};
    newCar[uid] = {
      year: year,
      make: make,
      model: model,
      mileage: currentMileage,
      maintenanceInterval: maintenanceInterval
    };
    // Add to user's cars in db
    console.log(`firebase-db.js addNewCar() says, "new car object:"`);
    console.log(newCar);
    this._usersRef.update(newCar).then( function() {
      return newCar;
    }, function(error) {
      console.log(error)
    });
  },
  // User deletes an existing car object
  deleteCar(uid, carKey) {
    console.log(`firebase-db deleteCar() was just called (double check node deletion worked as expected)`);
    return this._usersRef.child(uid).child(carKey).remove();
  },
  // Update mileage of a specific vehicle
  updateMileage(uid, carKey, newMileage) {
    console.log(`firebase-db updateMileage() was just called`);
    let mileage = parseInt(newMileage);
    this._usersRef.child(uid).child(carKey).mileage.update(mileage).then( function() {
      return mileage;
    }, function(error) {
      console.log(error);
    });
  },
  // Update interval for oil changes
  updateIntervalOilChange(uid, carKey, newIntervalMiles) {
    console.log(`firebase-db updateIntervalOilChange() was just called`);
    let newInterval = parseInt(newIntervalMiles);
    this._usersRef.child(uid).child(carKey).oilChange.update(newInterval).then( function() {
      return newInterval;
    }, function(error) {
      console.log(error);
    });
  },
  // Update interval for tire rotations
  updateIntervalTireRotation(uid, carKey, newIntervalMiles) {
    console.log(`firebase-db updateIntervalTireRotation() was just called`);
    let newInterval = parseInt(newIntervalMiles);
    this._usersRef.child(uid).child(carKey).tireRotation.update(newInterval).then( function() {
      return newInterval;
    }, function(error) {
      console.log(error);
    });
  },
  // Update interval for car inspections
  updateIntervalCarInspection(uid, carKey, newIntervalMonths) {
    console.log(`firebase-db updateIntervalCarInspection() was just called`);
    let newInterval = parseInt(newIntervalMonths);
    this._usersRef.child(uid).child(carKey).carInspectionMonths.update(newInterval).then( function() {
      return newInterval;
    }, function(error) {
      console.log(error);
    });
  },
  // Update interval for wiper blades
  updateIntervalWiperBlades(uid, carKey, newIntervalMonths) {
    console.log(`firebase-db updateIntervalWiperBlades() was just called`);
    let newInterval = parseInt(newIntervalMonths);
    this._usersRef.child(uid).child(carKey).wiperBladesMonths.update(newInterval).then( function() {
      return newInterval;
    }, function(error) {
      console.log(error);
    });
  },
  // Update interval for brake inspections
  updateIntervalBrakeInspection(uid, carKey, newIntervalMonths) {
    console.log(`firebase-db updateIntervalBrakeInspection() was just called`);
    let newInterval = parseInt(newIntervalMonths);
    this._usersRef.child(uid).child(carKey).brakeInspectionMonths.update(newInterval).then( function() {
      return newInterval;
    }, function(error) {
      console.log(error);
    });
  },
  // Update mileage of last oil change
  updateLastOilChange(uid, carKey, mileage) {
    console.log(`firebase-db updateLastOilChange() was just called`);
    this._usersRef.child(uid).child(carKey).oilChange.update(mileage).then( function() {
      return mileage;
    }, function(error) {
      console.log(error);
    });
  },
  // Update mileage of last tire rotation
  updateLastTireRotation(uid, carKey, mileage) {
    console.log(`firebase-db updateLastTireRotation() was just called`);
    this._usersRef.child(uid).child(carKey).tireRotation.update(mileage).then( function() {
      return mileage;
    }, function(error) {
      console.log(error);
    });
  },
  // Update date (UTC) of last car inspection
  updateLastCarInspection(uid, carKey, dateUTC) {
    console.log(`firebase-db updateLastCarInspection() was just called`);
    this._usersRef.child(uid).child(carKey).carInspectionUTC.update(dateUTC).then( function() {
      return dateUTC;
    }, function(error) {
      console.log(error);
    });
  },
  // Update date (UTC) of last wiper blades
  updateLastWiperBlades(uid, carKey, dateUTC) {
    console.log(`firebase-db updateLastWiperBlades() was just called`);
    this._usersRef.child(uid).child(carKey).wiperBladesUTC.update(dateUTC).then( function() {
      return dateUTC;
    }, function(error) {
      console.log(error);
    });
  },
  // Update date (UTC) of last brake inspection
  updateLastBrakeInspection(uid, carKey, dateUTC) {
    console.log(`firebase-db updateLastBrakeInspection() was just called`);
    this._usersRef.child(uid).child(carKey).brakeInspectionUTC.update(dateUTC).then( function() {
      return dateUTC;
    }, function(error) {
      console.log(error);
    });
  }
};

/*
// Sample schema of database

{
  "defaultMaintenance" : {
    "brakeInspectionMonths" : 12,
    "carInspectionMonths" : 12,
    "oilChange" : 3000,
    "tireRotation" : 6000,
    "wiperBladesMonths" : 6
  },
  "users" : {
    "authUid1" : {
      "-LakjnwowPEPKFksda" : {
        "lastMaintenance" : {
          "brakeInspectionUTC" : 1360013296,
          "carInspectionUTC" : 1360013296,
          "oilChange" : 30000,
          "tireRotation" : 29500,
          "wiperBladesUTC" : 1360013296
        },
        "maintenanceInterval" : {
          "brakeInspectionMonths" : 12,
          "carInspectionMonths" : 12,
          "oilChange" : 3000,
          "tireRotation" : 6000,
          "wiperBladesMonths" : 6
        },
        "make" : "honda",
        "mileage" : 33000,
        "model" : "civic",
        "year" : 2015
      }
    },
    "authUid2" : {
      "-TakjnwowPEPKFksda" : {...},
      "-MakjnwowPEPKFksda" : {...}
    }
  }
}
*/

/*
Firebase db rules:
{
  "rules": {
    "users": {
      "$uid": {
        ".write": "$uid === auth.uid",
        ".read": "$uid === auth.uid"
      }
    },
    "defaultMaintenance": {
      ".write": false,
      ".read": "auth != null"
    }
  }
}
*/