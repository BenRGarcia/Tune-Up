// After page loads
$(function() {
  // Hide virtual garage
  $("#add-new-car").hide();
  // Initialize Materialize CSS drop downs
  $('select').formSelect();
  // Get user cars from database, render to DOM
  initializeGarage();
});

$("#show-add-a-car").click(function(){

  $("#add-new-car").toggle();
  // $("#wrench").hide();
});

// Global Variable
var selectedCarKey;

function initializeGarage() {
  firebase.auth().onAuthStateChanged(function(user) {
    // User is signed in
    if (user){
      var uid = user.uid;
      // Call db object's method to return an object of all of user's car objects
      db.getAllUserCars(uid).then( function(response) {
        // console.log(response); // 'response' will be an object of car objects
        DOM.renderCars(response);
      }, function(err) {
      console.log(err); // Errors are logged in the console
      });
    } else {
      // User not signed in, redirect to home page
      // Leave this here so I know to reset auth later -- Ben 3/13/2018
      console.log("User is not signed in");
      // window.location.replace("https://benrgarcia.github.io/Tune-Up/")
    }
  });
}

// When user signs out
$('#js-sign-out').click( function() {
  userAuth.signOut();
  window.location.replace("https://benrgarcia.github.io/Tune-Up/");
});

//DISPLAY CAR DETAILS
$('body').on('click',".js-car-in-garage",function(){
  $("#toDoList").empty();
  var uid = userAuth.getUid;
  var carKey = $(this).data("car-key");

  // Set value of global variable
  selectedCarKey = carKey;

  // Call db object's method to return 'maintenanceInterval' object
  db.getLastMaintenance(uid, carKey).then( function(response) {
    // console.log(response); // 'response' will be the 'maintenanceInterval' object
    DOM.renderLastMaintenance(response);
  }, function(err) {
    console.log(err); // Errors are logged in the console
  });

  // Call db object's method to return 'maintenanceInterval' object
  db.getMaintenanceIntervals(uid, carKey).then( function(response) {
    // console.log(response); // 'response' will be the 'maintenanceInterval' object
    DOM.renderMaintenanceIntervals(response);
     var timelineObject = maintenanceTimeline.calculateNext(response[selectedCarKey]);  
     DOM.renderTimeline(timelineObject);
  }, function(err) {
    console.log(err); // Errors are logged in the console
  });

  // Update mileage display
  db.getAllUserCars(uid, carKey).then( function(response) {
    // console.log(response[selectedCarKey]); // 'response' will be the 'car objects' object
    DOM.renderMileage(response[selectedCarKey]);
    var timelineObject = maintenanceTimeline.calculateNext(response[selectedCarKey]);  
    DOM.renderTimeline(timelineObject);
  }, function(err) {
    console.log(err); // Errors are logged in the console
  });
});

//RETRIEVE ALL CARS 
$('body').on('click',".js-get-all-cars",function(){
  $("#toDoList").empty();

  var uid = userAuth.getUid;
  var carKey = $(this).data("car-key");

  // Call db object's method to return 'maintenanceInterval' object
  db.getAllUserCars(uid).then( function(response) {
    DOM.renderCars(response);
    // console.log(response);// 'response' will be an object of car objects
  }, function(err) {
    console.log(err); // Errors are logged in the console
  });
});

//DELETE USER'S CAR
$('body').on('click','.js-delete-car',function(){
  $("#toDoList").empty();

  var uid = userAuth.getUid;
  var carKey = $(this).data("car-key");
   
  // Call db object's method to delete a car
  db.deleteCar(uid, carKey).then( function(response) {
    initializeGarage();
    DOM.renderBlankData();
    // console.log(response); // 'response' is the deleted car's carKey
  }, function(err) {
    console.log(err); // Errors are logged in the console
  });
});

//UPDATE CAR MILEAGE
$('body').on('submit','#js-update-mileage-form',function(event){
  event.preventDefault();
  $("#toDoList").empty();

  // Ignore inputs if car not yet selected
  if (selectedCarKey) {
    // Get user input
    let newMileage = $('#js-update-mileage').val();
    // Ignore empty inputs
    if (newMileage) {
      // Reset form input to empty string
      $('#js-update-mileage').val("");

      var uid = userAuth.getUid;
      var carKey = selectedCarKey;

      // Call db object's method to update the mileage of a car
      db.updateMileage(uid, carKey, newMileage).then( function(response) {
        DOM.renderLastMaintenance(response);
        DOM.renderMileage(response);
        db.getAllUserCars(uid, carKey).then( function(response) {
          var timelineObject = maintenanceTimeline.calculateNext(response[selectedCarKey]);  
          DOM.renderTimeline(timelineObject);
        }, function(err) {
          console.log(err); // Errors are logged in the console
        });
          
      }, function(err) {
        console.log(err); // Errors are logged in the console
      });
    }
  }
});

//UPDATE INTERVAL FOR OIL MAINTENANCE
$('body').on('submit','#js-update-interval-oil-change-form',function(event){
  event.preventDefault();
  $("#toDoList").empty();

  // Ignore inputs if car not yet selected
  if (selectedCarKey) {
    // Get user input
    let newInterval = $('#js-update-interval-oil-change').val();

    // Ignore empty inputs
    if (newInterval) {

      // Reset form input to empty string
      $('#js-update-interval-oil-change').val("");

      var uid = userAuth.getUid;
      var carKey = selectedCarKey;
     
      // Call db object's method to update the maintenance interval for oil
      db.updateIntervalOilChange(uid, carKey, newInterval).then( function(response) {
        db.getMaintenanceIntervals(uid, carKey).then( function(response) {
        DOM.renderMaintenanceIntervals(response);
        db.getAllUserCars(uid, carKey).then( function(response) {
          var timelineObject = maintenanceTimeline.calculateNext(response[selectedCarKey]);  
          DOM.renderTimeline(timelineObject);
        }, function(err) {
          console.log(err); // Errors are logged in the console
        });
      }, function (err) {
        console.log(err)
      });
        // console.log(response); // 'response' is an object of updated interval for oil
      }, function(err) {
        console.log(err); // Errors are logged in the console
      });
    }
  }
});

//UPDATE INTERVAL FOR TIRE ROTATION
$('body').on('submit','#js-update-interval-tire-rotation-form',function(event){
  event.preventDefault();
  $("#toDoList").empty();

  // Ignore inputs if car not yet selected
  if (selectedCarKey) {
    // Get user input
    let newInterval = $('#js-update-interval-tire-rotation').val();

    // Ignore empty inputs
    if (newInterval) {

      // Reset form input to empty string
      $('#js-update-interval-tire-rotation').val("");

      var uid = userAuth.getUid;
      var carKey = selectedCarKey;

      // Call db object's method to update the maintenance interval for oil
      db.updateIntervalTireRotation(uid, carKey, newInterval).then( function(response) {
        db.getMaintenanceIntervals(uid, carKey).then( function(response) {
        DOM.renderMaintenanceIntervals(response)
        db.getAllUserCars(uid, carKey).then( function(response) {
          var timelineObject = maintenanceTimeline.calculateNext(response[selectedCarKey]);  
          DOM.renderTimeline(timelineObject);
        }, function(err) {
          console.log(err); // Errors are logged in the console
        });
      }, function (err) {
        console.log(err)
      });
        // console.log(response); // 'response' is an object of updated interval for oil
      }, function(err) {
        console.log(err); // Errors are logged in the console
      });
    }
  }
});

//UPDATE INTERVAL FOR CAR INSPECTION
$('body').on('submit','#js-update-interval-car-inspection-form',function(event){
  event.preventDefault();
  $("#toDoList").empty();

  // Ignore inputs if car not yet selected
  if (selectedCarKey) {
    // Get user input
    let newInterval = $('#js-update-interval-car-inspection').val();

    // Ignore empty inputs
    if (newInterval) {

      // Reset form input to empty string
      $('#js-update-interval-car-inspection').val("");

      var uid = userAuth.getUid;
      var carKey = selectedCarKey;

      // Call db object's method to update the maintenance interval for car inspection
      db.updateIntervalCarInspection(uid, carKey, newInterval).then( function(response) {
        db.getMaintenanceIntervals(uid, carKey).then( function(response) {
        DOM.renderMaintenanceIntervals(response);
        db.getAllUserCars(uid, carKey).then( function(response) {
          var timelineObject = maintenanceTimeline.calculateNext(response[selectedCarKey]);  
          DOM.renderTimeline(timelineObject);
        }, function(err) {
          console.log(err); // Errors are logged in the console
        });
      }, function (err) {
        console.log(err)
      });
        // console.log(response); // 'response' is an object of updated interval for car inspection months
      }, function(err) {
        console.log(err); // Errors are logged in the console
      });
    }
  }
});

//UPDATE INTERVAL FOR WIPER BLADES
$('body').on('submit','#js-update-interval-wiper-blades-form',function(event){
  event.preventDefault();
  $("#toDoList").empty();

  // Ignore inputs if car not yet selected
  if (selectedCarKey) {
    // Get user input
    let newInterval = $('#js-update-interval-wiper-blades').val();

    // Ignore empty inputs
    if (newInterval) {

      // Reset form input to empty string
      $('#js-update-interval-wiper-blades').val("");

      var uid = userAuth.getUid;
      var carKey = selectedCarKey;

      // Call db object's method to update the maintenance interval for wiper blades
      db.updateIntervalWiperBlades(uid, carKey, newInterval).then( function(response) {
        db.getMaintenanceIntervals(uid, carKey).then( function(response) {
        DOM.renderMaintenanceIntervals(response);
        db.getAllUserCars(uid, carKey).then( function(response) {
          var timelineObject = maintenanceTimeline.calculateNext(response[selectedCarKey]);  
          DOM.renderTimeline(timelineObject);
        }, function(err) {
          console.log(err); // Errors are logged in the console
        });
      }, function (err) {
        console.log(err)
      });
        // console.log(response); // 'response' is an object of updated interval for wiper blades
      }, function(err) {
        console.log(err); // Errors are logged in the console
      });
    }
  }
});

//UPDATE INTERVAL FOR BRAKES
$('body').on('submit','#js-update-interval-brake-inspection-form',function(event){
  event.preventDefault();
  $("#toDoList").empty();

  // Ignore inputs if car not yet selected
  if (selectedCarKey) {
    // Get user input
    let newInterval = $('#js-update-interval-brake-inspection').val();

    // Ignore empty inputs
    if (newInterval) {

      // Reset form input to empty string
      $('#js-update-interval-brake-inspection').val("");

      var uid = userAuth.getUid;
      var carKey = selectedCarKey;

      // Call db object's method to update the maintenance interval for brake inspections
      db.updateIntervalBrakeInspection(uid, carKey, newInterval).then( function(response) {
        db.getMaintenanceIntervals(uid, carKey).then( function(response) {
        DOM.renderMaintenanceIntervals(response);
        db.getAllUserCars(uid, carKey).then( function(response) {
          var timelineObject = maintenanceTimeline.calculateNext(response[selectedCarKey]);  
          DOM.renderTimeline(timelineObject);
        }, function(err) {
          console.log(err); // Errors are logged in the console
        });
      }, function (err) {
        console.log(err)
      });
        // console.log(response); // 'response' is an object of updated interval for brake inspection
      }, function(err) {
        console.log(err); // Errors are logged in the console
      });
    }
  }
});

//UPDATE LAST MAINTENANCE FOR OIL
$('body').on('submit','#js-update-last-oil-change-form',function(event){
  event.preventDefault();
  $("#toDoList").empty();

  // Ignore inputs if car not yet selected
  if (selectedCarKey) {
    // Get user input
    let mileage = $('#js-update-last-oil-change').val();

    // Ignore empty inputs
    if (mileage) {

      // Reset form input to empty string      
      $('#js-update-last-oil-change').val("");

      var uid = userAuth.getUid;
      var carKey = selectedCarKey;

      // Call db object's method to update the last maintenance of oil
      db.updateLastOilChange(uid, carKey, mileage).then( function(response) {
        // DOM.renderLastMaintenance(response);
        db.getLastMaintenance(uid, carKey).then( function(response) {
          DOM.renderLastMaintenance(response);
          db.getAllUserCars(uid, carKey).then( function(response) {
            var timelineObject = maintenanceTimeline.calculateNext(response[selectedCarKey]);  
            DOM.renderTimeline(timelineObject);
          }, function(err) {
            console.log(err); // Errors are logged in the console
          });
        }, function(err){
          console.log(err);
        });
        // console.log(response); // 'response' is an object of last maintenance of oil
      }, function(err) {
        console.log(err); // Errors are logged in the console
      });
    }
  }
});

//UPDATE LAST MAINTENANCE FOR TIRES
$('body').on('submit','#js-update-last-tire-rotation-form',function(event){
  event.preventDefault();
  $("#toDoList").empty();

  // Ignore inputs if car not yet selected
  if (selectedCarKey) {
    // Get user input
    let mileage = $('#js-update-last-tire-rotation').val();

    // Ignore empty input
    if (mileage) {

      // Reset form input to empty string   
      $('#js-update-last-tire-rotation').val("");

      var uid = userAuth.getUid;
      var carKey = selectedCarKey;

      // Call db object's method to update the last maintenance of tire rotation
      db.updateLastTireRotation(uid, carKey, mileage).then( function(response) {
        // DOM.renderLastMaintenance(response);
        db.getLastMaintenance(uid, carKey).then( function(response) {
          DOM.renderLastMaintenance(response);   
          db.getAllUserCars(uid, carKey).then( function(response) {
            var timelineObject = maintenanceTimeline.calculateNext(response[selectedCarKey]);  
            DOM.renderTimeline(timelineObject);
          }, function(err) {
            console.log(err); // Errors are logged in the console
          });      
        }, function(err){
          console.log(err);
        });
        // console.log(response); // 'response' is an object of last maintenance of tire rotation
      }, function(err) {
        console.log(err); // Errors are logged in the console
      });
    }
  }
});

//UPDATE LAST MAINTENANCE FOR CAR INSPECTION
$('body').on('change','#js-update-last-car-inspection-form',function(event){
  $("#toDoList").empty();
  // Ignore inputs if car not yet selected
  if (selectedCarKey) {
    // Get user input
    let date = $('#js-update-last-car-inspection').val();

    // Ignore empty inputs
    if (date) {

      // Reset form input to empty string
      $('#js-update-last-car-inspection').val("");

      // Use moment.js to convert to Unix Time
      let unixDate = dateConverter.mmddyyyyToUnixTime(date); // = 'date' converted to a unix date with moment.js

      var uid = userAuth.getUid;
      var carKey = selectedCarKey;

      // Call db object's method to update the last maintenance of car inspection
      db.updateLastCarInspection(uid, carKey, unixDate).then( function(response) {
        // DOM.renderLastMaintenance(response);
        db.getLastMaintenance(uid, carKey).then( function(response) {
          DOM.renderLastMaintenance(response);   
          db.getAllUserCars(uid, carKey).then( function(response) {
            var timelineObject = maintenanceTimeline.calculateNext(response[selectedCarKey]);  
            DOM.renderTimeline(timelineObject);
          }, function(err) {
            console.log(err); // Errors are logged in the console
          });       
        }, function(err){
          console.log(err);
        });
        // console.log(response); // 'response' is an object of last maintenance of car inspection
      }, function(err) {
        console.log(err); // Errors are logged in the console
      });
    }
  }
});

//UPDATE LAST MAINTENANCE FOR WIPER BLADES
$('body').on('change','#js-update-last-wiper-blades-form', function(event){
  $("#toDoList").empty();
  // Ignore inputs if car not yet selected
  if (selectedCarKey) {
    // Get user input
    let date = $('#js-update-last-wiper-blades').val();

    // Ignore empty input
    if (date) {

      // Reset form input to empty string
      $('#js-update-last-wiper-blades').val("");

      // Use moment.js to convert to Unix Time
      let unixDate = dateConverter.mmddyyyyToUnixTime(date); // = 'date' converted to a unix date with moment.js

      var uid = userAuth.getUid;
      var carKey = selectedCarKey;

      // Call db object's method to update the last maintenance of wiper blades
      db.updateLastWiperBlades(uid, carKey, unixDate).then( function(response) {
        // DOM.renderLastMaintenance(response);
        db.getLastMaintenance(uid, carKey).then( function(response) {
          DOM.renderLastMaintenance(response);     
          db.getAllUserCars(uid, carKey).then( function(response) {
            var timelineObject = maintenanceTimeline.calculateNext(response[selectedCarKey]);  
            DOM.renderTimeline(timelineObject);
          }, function(err) {
            console.log(err); // Errors are logged in the console
          });    
        }, function(err){
          console.log(err);
        });
        // console.log(response); // 'response' is an object of last maintenance of wiper blades
      }, function(err) {
        console.log(err); // Errors are logged in the console
      });
    }
  }
});

//UPDATE LAST MAINTENANCE FOR BRAKES
$('body').on('change','#js-update-last-brake-inspection-form',function(event){
  $("#toDoList").empty();
  // Ignore inputs if car not yet selected
  if (selectedCarKey) {
    // Get user input
    let date = $('#js-update-last-brake-inspection').val();

    // Ignore empty input
    if (date) {

      // Reset form input to empty string
      $('#js-update-last-brake-inspection').val("");

      // Use moment.js to convert to Unix Time
      let unixDate = dateConverter.mmddyyyyToUnixTime(date); // = 'date' converted to a unix date with moment.js

      var uid = userAuth.getUid;
      var carKey = selectedCarKey;

      // Call db object's method to update the last maintenance of brake inspection
      db.updateLastBrakeInspection(uid, carKey, unixDate).then( function(response) {
        // DOM.renderLastMaintenance(response);
        db.getLastMaintenance(uid, carKey).then( function(response) {
          DOM.renderLastMaintenance(response);   
          db.getAllUserCars(uid, carKey).then( function(response) {
            var timelineObject = maintenanceTimeline.calculateNext(response[selectedCarKey]);  
            DOM.renderTimeline(timelineObject);
          }, function(err) {
            console.log(err); // Errors are logged in the console
          });       
        }, function(err){
          console.log(err);
        });
        // console.log(response); // 'response' is an object of last maintenance of brake inspection
      }, function(err) {
        console.log(err); // Errors are logged in the console
      });
    }
  }
});