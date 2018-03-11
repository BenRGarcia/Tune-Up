/*
 *  main.js to receive user input,
 *  translate to method calls to objects:
 *    googleApi  | (google maps API - local service provider locations)
 *    vehicleApi | (NHTSA API - source info for year/make/model)
 *    db         | (Firebase database)  
**/

//NAV BAR
$(document).ready(function() {
  // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible dropdown
  $('.collapsible').collapsible();
  $('.button-collapse').sideNav({
    menuWidth: 300, // Default is 300
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true, // Choose whether you can drag to open on touch screens,
    // onOpen: function(el) { /* Do Stuff* / }, // A function to be called when sideNav is opened
    // onClose: function(el) { /* Do Stuff* / }, // A function to be called when sideNav is closed
  });
  $('select').material_select();
});

// Start listener on page load
window.addEventListener('load', function() {
  initializeGarage();
});

//DISPLAY CAR DETAILS
$('body').on('click',".js-display-car-details",function(){
  if (userAuth.getUid){
    var uid = userAuth.getUid;
    var carKey = $(this).data("data-car-key");

    // Call db object's method to return 'maintenanceInterval' object
    db.getMaintenanceIntervals(uid, carKey).then( function(response) {
      console.log(response); // 'response' will be the 'maintenanceInterval' object
      DOM.renderLastMaintenance(response);
    }, function(err) {
      console.log(err); // Errors are logged in the console
    });
  }
});

//CREATE NEW CAR
$('body').on('click',"#js-new-car-add",function(){
  if (userAuth.getUid){
    var uid = userAuth.getUid;
    // Get user input
    let year = $('#js-new-car-year').val();
    let make = $('#js-new-car-make').val();
    let model = $('#js-new-car-model').val();
    let mileage = $('#js-new-car-mileage').val();

    // Ignore incomplete form submissions
    if (year && make && model && mileage) {
    // Reset form inputs to empty strings
    $('#js-new-car-year').val("");
    $('#js-new-car-make').val("");
    $('#js-new-car-model').val("");
    $('#js-new-car-mileage').val("");
    // Call db object's method to post new car to firebase database
    db.addNewCar(uid, year, make, model, mileage).then( function(response) {
      DOM.renderCars(response);
      console.log(response); // 'response' will be the new car object created
    }, function(err) {
      console.log(err); // Errors are logged in the console
      });
    }
  }
});

//RETRIEVE MAINTENANCE INTERVALS
$('body').on('click',".js-last-maintenance-interval",function(){
  if (userAuth.getUid){
    var uid = userAuth.getUid;
    var carKey = $(this).data("data-car-key");

    // Call db object's method to return 'maintenanceInterval' object
    db.getMaintenanceIntervals(uid, carKey).then( function(response) {
      DOM.renderMaintenanceIntervals(response);
      console.log(response); // 'response' will be the 'maintenanceInterval' object      
    }, function(err) {
      console.log(err); // Errors are logged in the console
    });
  }
});

//RETRIEVE ALL CARS 
$('body').on('click',".js-get-all-cars",function(){
  if (userAuth.getUid){
    var uid = userAuth.getUid;
    var carKey = $(this).data("data-car-key");

    // Call db object's method to return 'maintenanceInterval' object
    db.getAllUserCars(uid).then( function(response) {
      DOM.renderCars(response);
      console.log(response);// 'response' will be an object of car objects
    }, function(err) {
      console.log(err); // Errors are logged in the console
    });
  }
});

//DELETE USER'S CAR
$('body').on('click','#js-delete-car',function(){
  var uid = userAuth.getUid;
  var carKey = $(this).data("data-car-key");
   
  // Call db object's method to delete a car
  db.deleteCar(uid, carKey).then( function(response) {
    DOM.renderCars(response);
    console.log(response); // 'response' is the deleted car's carKey
  }, function(err) {
    console.log(err); // Errors are logged in the console
  });
});

//UPDATE CARE MILEAGE
$('body').on('click','#js-update-mileage',function(){
  // Get user input
  let newMileage = $('#js-updated-mileage').val();
  // Ignore empty inputs
  if (newMileage) {
    // Reset form input to empty string
    $('#js-updated-mileage').val("");

    var uid = userAuth.getUid;
    var carKey = $(this).data("data-car-key");

    // Call db object's method to update the mileage of a car
    db.updateMileage(uid, carKey, newMileage).then( function(response) {
      DOM.renderLastMaintenance(response);
      console.log(response); // 'response' is an object of updated mileage
    }, function(err) {
      console.log(err); // Errors are logged in the console
    });
  }
});

//UPDATE INTERVAL FOR OIL MAINTENANCE
$('body').on('click','#js-update-interval-oil',function(){
  // Get user input
  let newInterval = $('#js-updated-interval-oil').val();

  // Ignore empty inputs
  if (newInterval) {

    // Reset form input to empty string
    $('#js-updated-interval-oil').val("");

    var uid = userAuth.getUid;
    var carKey = $(this).data("data-car-key");
   
    // Call db object's method to update the maintenance interval for oil
    db.updateIntervalOilChange(uid, carKey, newInterval).then( function(response) {
      DOM.renderMaintenanceIntervals(response);
      console.log(response); // 'response' is an object of updated interval for oil
    }, function(err) {
      console.log(err); // Errors are logged in the console
    });
  }
});

//UPDATE INTERVAL FOR TIRE ROTATION
$('body').on('click','#js-update-interval-tire',function(){
  // Get user input
  let newInterval = $('#js-updated-interval-tire').val();

  // Ignore empty inputs
  if (newInterval) {

    // Reset form input to empty string
    $('#js-updated-interval-tire').val("");

    var uid = userAuth.getUid;
    var carKey = $(this).data("data-car-key"); 

    // Call db object's method to update the maintenance interval for oil
    db.updateIntervalTireRotation(uid, carKey, newInterval).then( function(response) {
      DOM.renderMaintenanceIntervals(response);
      console.log(response); // 'response' is an object of updated interval for oil
    }, function(err) {
      console.log(err); // Errors are logged in the console
    });
  }
});




 function initializeGarage(){
    console.log("Garage has been initialized");
    if (userAuth.getUid){
      var uid = userAuth.getUid;
       // Call db object's method to return an object of all of user's car objects
      db.getAllUserCars(uid).then( function(response) {
        console.log(response); // 'response' will be an object of car objects
        DOM.renderCars(response);
      }, function(err) {
        console.log(err); // Errors are logged in the console
      });
    }
 }

 









// $(body).on("click"," ",function())

// .attr("data-car-key", carKeyvalue)

 



/*

SUGGESTED NAMING CONVENTIONS FOR HTML ID'S

========= Update Screen with user's data =========

Display div's for last maintenance data:

$('.js-display-car-details').text();
$('#js-display-last-oil-change').text();
$('#js-display-last-tire-rotation').text();
$('#js-display-last-car-inspection').text();
$('#js-display-last-brake-inspection').text();
$('#js-display-last-wiper-blades').text();

Display timeline:

$('#js-timeline-title-oil-change').text()
$('#js-timeline-title-tire-rotation').text()
$('#js-timeline-title-car-inspection').text()
$('#js-timeline-title-brake-inspection').text()
$('#js-timeline-title-wiper-blades').text()

$('#js-timeline-date-oil-change').text()
$('#js-timeline-date-tire-rotation').text()
$('#js-timeline-date-car-inspection').text()
$('#js-timeline-date-brake-inspection').text()
$('#js-timeline-date-wiper-blades').text()

============== Sign Out ==============
$('#js-sign-out').click( function() {
  userAuth.signOut();
  // then redirect to home page
});

=============== Add New Car ===============
$('#js-add-car-submit').click( function() {
  $('#js-add-car-year').val()
  $('#js-add-car-make').val()
  $('#js-add-car-model').val()
  $('#js-add-car-mileage').val()
  db.addNewCar(uid, year, make, model, mileage);
});

================== Update Maintenance Intervals ==================
$('body').on("click", "#js-update-interval-oil-change", function() {
  db.updateIntervalOilChange(uid, carKey, newIntervalMiles);
});
$('body').on("click", "#js-update-interval-tire-rotation", function() {
  db.updateIntervalTireRotation(uid, carKey, newIntervalMiles);
});
$('body').on("click", "#js-update-interval-car-inspection", function() {
  db.updateIntervalCarInspection(uid, carKey, newIntervalMonths);
});
$('body').on("click", "#js-update-interval-brake-inspection", function() {
  db.updateIntervalBrakeInspection(uid, carKey, newIntervalMonths);
});
$('body').on("click", "#js-update-interval-wiper-blades", function() {
  db.updateIntervalWiperBlades(uid, carKey, newIntervalMonths);
});

========= Update Last Maintenance =========
$('body').on("click", "#js-update-last-oil-change", function() {
  db.updateLastOilChange(uid, carKey, newMileage);
});
$('body').on("click", "#js-update-last-tire-rotation", function() {
  db.updateLastTireRotation(uid, carKey, newMileage);
});
$('body').on("click", "#js-update-last-car-inspection", function() {
  db.updateLastCarInspection(uid, carKey, dateUnixTime);
});
$('body').on("click", "#js-update-last-brake-inspection", function() {
  db.updateLastBrakeInspection(uid, carKey, dateUnixTime);
});
$('body').on("click", "#js-update-last-wiper-blades", function() {
  db.updateLastWiperBlades(uid, carKey, dateUnixTime);
});

=============== Delete Car ===============
$('body').on("click", ".js-delete-car", function() {
  db.deleteCar(uid, carKey);
})

*/