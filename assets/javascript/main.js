/*
 *  main.js to receive user input,
 *  translate to method calls to objects:
 *    googleApi  | (google maps API - local service provider locations)
 *    vehicleApi | (NHTSA API - source info for year/make/model)
 *    db         | (Firebase database)
 *    
 */

 //User input we will need:
    //car make
    //car year 
    //car model
    //miles traveled
    //date of last oil change
    //date of last tire rotation
    //date of last inspection

/*===========================*/
// Ben's test code area below
/*===========================*/
$( function() {
  console.log(`page loaded`);

  var uid;
  var carKey = "-L77UD-g5mboZ7qmdDbG";

  $('#js-new-car').on("click", function() {
    uid = userAuth.getUid;
    console.log(`I was called, uid = ${uid}`);
    db.addNewCar(uid, 2015, "honda", "civic", 33000).then( function(response) {
      console.log(`#js-new-car response received:`);
      console.log(response);
    }, function(err) {
      console.log(err);
    });
  });

  $('#js-def-maint').on("click", function() {
    db.getDefMaint().then( function(response) {
      console.log(`#js-def-maint response received:`);
      console.log(response);
    }, function(err) {
      console.log(err);
    });
  });

  $('#js-last-maint').on("click", function() {
    // hard code carKey before running
    db.getLastMaintenance(uid, carKey).then( function(response) {
      console.log(`#js-last-maint response received:`);
      console.log(response);
    }, function(err) {
      console.log(err);
    });
  });

  $('#js-last-maint-interval').on("click", function() {
    db.getMaintenanceIntervals(uid, carKey).then( function(response) {
      console.log(`#js-last-maint-interval response received:`);
      console.log(response);
    }, function(err) {
      console.log(err);
    });
  });

  $('#js-get-user-cars').on("click", function() {
    db.getUsersCars(uid).then( function(response) {
      console.log(`#js-get-user-cars response received:`);
      console.log(response);
    }, function(err) {
      console.log(err);
    });
  });

  $('#js-get-user-car').on("click", function() {
    db.getUsersCar(uid, carKey).then( function(response) {
      console.log(`#js-get-user-car response received:`);
      console.log(response);
    }, function(err) {
      console.log(err);
    });
  });

  $('#js-update-mileage').on("click", function() {
    db.updateMileage(uid, carKey, 99999).then( function(response) {
      console.log(`#js-update-mileage response received:`);
      console.log(response);
    }, function(err) {
      console.log(err);
    });
  });

  $('#js-update-oil-int').on("click", function() {
    db.updateIntervalOilChange(uid, carKey, 11111).then( function(response) {
      console.log(`#js-update-oil-int response received:`);
      console.log(response);
    }, function(err) {
      console.log(err);
    });
  });

  $('#js-update-inspect-int').on("click", function() {
    db.UpdateIntervalCarInspection(uid, carKey, 66).then( function(response) {
      console.log(`#js-update-inspect-int response received:`);
      console.log(response);
    }, function(err) {
      console.log(err);
    });
  });

  $('#js-update-wiper-int').on("click", function() {
    db.updateIntervalWiperBlades(uid, carKey, 33).then( function(response) {
      console.log(`#js-update-wiper-int response received:`);
      console.log(response);
    }, function(err) {
      console.log(err);
    });
  });

  $('#js-update-brake-int').on("click", function() {
    db.updateIntervalBrakeInspection(uid, carKey, 11).then( function(response) {
      console.log(`#js-update-brake-int response received:`);
      console.log(response);
    }, function(err) {
      console.log(err);
    });
  });

  $('#js-update-tire-int').on("click", function() {
    db.updateIntervalTireRotation(uid, carKey, 22222).then( function(response) {
      console.log(`#js-update-tire-int response received:`);
      console.log(response);
    }, function(err) {
      console.log(err);
    });
  });

  $('#js-last-oil').on("click", function() {
    db.updateLastOilChange(uid, carKey, mileage).then( function(response) {
      console.log(`#js-last-oil response received:`);
      console.log(response);
    }, function(err) {
      console.log(err);
    });
  });

  $('#js-last-tire').on("click", function() {
    db.updateLastTireRotation(uid, carKey, 7777).then( function(response) {
      console.log(`#js-last-tire response received:`);
      console.log(response);
    }, function(err) {
      console.log(err);
    });
  });

  $('#js-last-inspect').on("click", function() {
    db.updateLastCarInspection(uid, carKey, 123456).then( function(response) {
      console.log(`#js-last-inspect response received:`);
      console.log(response);
    }, function(err) {
      console.log(err);
    });
  });

  $('#js-last-wiper').on("click", function() {
    db.updateLastWiperBlades(uid, carKey, 987654).then( function(response) {
      console.log(`#js-last-wiper response received:`);
      console.log(response);
    }, function(err) {
      console.log(err);
    });
  });

  $('#js-last-brake').on("click", function() {
    db.updateLastBrakeInspection(uid, carKey, 24680).then( function(response) {
      console.log(`#js-last-brake response received:`);
      console.log(response);
    }, function(err) {
      console.log(err);
    });
  });

  $('#js-delete-car').on("click", function() {
    db.deleteCar(uid, carKey).then( function(response) {
      console.log(`#js-delete-car response received:`);
      console.log(response);
    }, function(err) {
      console.log(err);
    });
  });

});