/*
 *  firebase-db.js to contain all code with respect to the database.
 */

const db = {
  // Default values of maintenance intervals
  _defaultMaintenanceInterval: {
    wiperBladesMonths:        6,
    brakeInspectionMonths:   12,
    carInspectionMonths:     12,
    oilChange:             3000,
    tireRotation:          6000
  },
  // Default values of last maintenance performed
  _defaultLastMaintenance: {
    wiperBladesUnixTime:     false,
    brakeInspectionUnixTime: false,
    carInspectionUnixTime:   false,
    oilChange:               false,
    tireRotation:            false
  },
  /**
   *  Create a new car object
   *    Test Results: Passing
   */
  addNewCar(uid, year, make, model, mileage) {
    // Convert mileage to number type
    let mileageNumber = parseInt(mileage);
    // Get firebase db key for new car object
    let carKey = firebase.database().ref('users').child(uid).push().key;
    // Create empty object
    let newCar = {};
    // Assemble new car object
    newCar[carKey] = {
      year:    year,
      make:    make,
      model:   model,
      mileage: mileageNumber,
      maintenanceInterval: this._defaultMaintenanceInterval,
      lastMaintenance:     this._defaultLastMaintenance
    };
    // Update database with new car object
    return firebase.database().ref('/users/' + uid).update(newCar).then( function() {
      return newCar;
    }, function(err) {
      console.log(err);
    });
  },
  /**
   * Get the 'last maintenance' object from the db
   *   Test Results: Passing
   */
  getLastMaintenance(uid, carKey) {
    return firebase.database().ref('/users/' + uid).child(carKey).once('value').then( function(snapshot) {
      return snapshot.val().lastMaintenance;
    }, function(err) {
      console.log(err);
    });
  },
  /**
   * Get 'maintenance intervals' for a specific vehicle
   *   Test Results: Passing
   */
  getMaintenanceIntervals(uid, carKey) {
    return firebase.database().ref('/users/' + uid).child(carKey).once('value').then( function(snapshot) {
      return snapshot.val().maintenanceInterval;
    }, function(err) {
      console.log(err);
    });
  },
  /**
   * Get an object of all of the user's cars (an object of car objects)
   *   Test Results: Passing
   */
  getAllUserCars(uid) {
    return firebase.database().ref('/users/' + uid).once('value').then( function(snapshot) {
      return snapshot.val();
    }, function(err) {
      console.log(err);
    });
  },
















  getUsersCar(uid, carKey) {
    return this._usersRef.child(uid).once('value').then( function(snapshot) {
      console.log(`firebase-db.js db.getUsersCar() says, "specific car object is:"`);
      console.log(snapshot.child(carKey).val());
      return snapshot.child(carKey).val(); // test results:
    }, function(error) {
      console.log(error);
    });
  },
  /* 
   *  Methods to add/change data from the firebase db 
   */
  
  // User deletes an existing car object
  deleteCar(uid, carKey) {
    console.log(`firebase-db deleteCar() was just called (double check node deletion worked as expected)`);
    return this._usersRef.child(uid).child(carKey).remove(); // test results:
  },
  // Update mileage of a specific vehicle
  updateMileage(uid, carKey, newMileage) {
    console.log(`firebase-db updateMileage() was just called`);
    let mileage = parseInt(newMileage);
    return firebase.database().ref('/users/' + uid)[carKey].mileage.update(mileage).then( function() {
      return mileage; // test results:
    }, function(error) {
      console.log(error);
    });
  },
  // Update interval for oil changes
  updateIntervalOilChange(uid, carKey, newIntervalMiles) {
    console.log(`firebase-db updateIntervalOilChange() was just called`);
    let newInterval = parseInt(newIntervalMiles);
    return firebase.database().ref('/users/' + uid)[carKey].oilChange.update(newInterval).then( function() {
      return newInterval; // test results:
    }, function(error) {
      console.log(error);
    });
  },
  // Update interval for tire rotations
  updateIntervalTireRotation(uid, carKey, newIntervalMiles) {
    console.log(`firebase-db updateIntervalTireRotation() was just called`);
    let newInterval = parseInt(newIntervalMiles);
    return this._usersRef.child(uid).child(carKey).tireRotation.update(newInterval).then( function() {
      return newInterval; // test results:
    }, function(error) {
      console.log(error);
    });
  },
  // Update interval for car inspections
  updateIntervalCarInspection(uid, carKey, newIntervalMonths) {
    console.log(`firebase-db updateIntervalCarInspection() was just called`);
    let newInterval = parseInt(newIntervalMonths);
    return this._usersRef.child(uid).child(carKey).carInspectionMonths.update(newInterval).then( function() {
      return newInterval; // test results:
    }, function(error) {
      console.log(error);
    });
  },
  // Update interval for wiper blades
  updateIntervalWiperBlades(uid, carKey, newIntervalMonths) {
    console.log(`firebase-db updateIntervalWiperBlades() was just called`);
    let newInterval = parseInt(newIntervalMonths);
    return this._usersRef.child(uid).child(carKey).wiperBladesMonths.update(newInterval).then( function() {
      return newInterval; // test results:
    }, function(error) {
      console.log(error);
    });
  },
  // Update interval for brake inspections
  updateIntervalBrakeInspection(uid, carKey, newIntervalMonths) {
    console.log(`firebase-db updateIntervalBrakeInspection() was just called`);
    let newInterval = parseInt(newIntervalMonths);
    return this._usersRef.child(uid).child(carKey).brakeInspectionMonths.update(newInterval).then( function() {
      return newInterval; // test results:
    }, function(error) {
      console.log(error);
    });
  },
  // Update mileage of last oil change
  updateLastOilChange(uid, carKey, mileage) {
    console.log(`firebase-db updateLastOilChange() was just called`);
    return this._usersRef.child(uid).child(carKey).oilChange.update(mileage).then( function() {
      return mileage; // test results:
    }, function(error) {
      console.log(error);
    });
  },
  // Update mileage of last tire rotation
  updateLastTireRotation(uid, carKey, mileage) {
    console.log(`firebase-db updateLastTireRotation() was just called`);
    return this._usersRef.child(uid).child(carKey).tireRotation.update(mileage).then( function() {
      return mileage; // test results:
    }, function(error) {
      console.log(error);
    });
  },
  // Update date (UTC) of last car inspection
  updateLastCarInspection(uid, carKey, dateUTC) {
    console.log(`firebase-db updateLastCarInspection() was just called`);
    return this._usersRef.child(uid).child(carKey).carInspectionUTC.update(dateUTC).then( function() {
      return dateUTC; // test results:
    }, function(error) {
      console.log(error);
    });
  },
  // Update date (UTC) of last wiper blades
  updateLastWiperBlades(uid, carKey, dateUTC) {
    console.log(`firebase-db updateLastWiperBlades() was just called`);
    return this._usersRef.child(uid).child(carKey).wiperBladesUTC.update(dateUTC).then( function() {
      return dateUTC; // test results:
    }, function(error) {
      console.log(error);
    });
  },
  // Update date (UTC) of last brake inspection
  updateLastBrakeInspection(uid, carKey, dateUTC) {
    console.log(`firebase-db updateLastBrakeInspection() was just called`);
    return this._usersRef.child(uid).child(carKey).brakeInspectionUTC.update(dateUTC).then( function() {
      return dateUTC; // test results:
    }, function(error) {
      console.log(error);
    });
  }
};
