const DOM = {
  // render 'cars' to the browser
  renderCars(carsObject) {

    // Ignore empty object
    if (carsObject) {

      // Iterate over car objects
      for (let key in carsObject) {

        // Declare carKey variable
        let carKey = key;

        // Strip out year, make, model from object
        let year = carsObject[key].year;
        let make = carsObject[key].make;
        let model = carsObject[key].model;

        // Make new div
        let div = $('<div>');

        // Add attributes and text
        div.data("car-key", carKey);
        div.addClass("js-display-car-details");
        div.text(year, make, model);

        // Append div to car display area
        $('.js-display-car-details').append(div);
      }
      return carsObject;
    }
    return carsObject
  },
  // render 'lastMaintenance'
  renderLastMaintenance(object) {

    // Ignore empty object
    if (object) {

      // Convert Unix time to MMDDYYYY format
      /* 
       *  Call dateConverter's unixTimeTommddyyyy() method when Melissa completes 
       *
       *  In need of conversion: 
       *    1) carInpectionUnixTime
       *    2) brakeInspectionUnixTime
       *    3) wiperBladesUnixTime
      **/

      // Declare variables
      let lastOilChange       = object.oilChange;
      let lastTireRotation    = object.tireRotation;
      let lastCarInspection   = object.carInpectionUnixTime;
      let lastBrakeInspection = object.brakeInspectionUnixTime;
      let lastWiperBlades     = object.wiperBladesUnixTime;

      // Update DOM
      $('#js-display-last-oil-change').text(lastOilChange);
      $('#js-display-last-tire-rotation').text(lastTireRotation);
      $('#js-display-last-car-inspection').text(lastCarInspection);
      $('#js-display-last-brake-inspection').text(lastBrakeInspection);
      $('#js-display-last-wiper-blades').text(lastWiperBlades);

      return object;
    }
    return object;
  },
  // render 'maintenanceIntervals' to input placeholders
  renderMaintenanceIntervals(object) {
    // Please pass to me the object returned by db.getMaintenanceIntervals()

    // $('#js-update-interval-oil-change')
    // $('#js-update-interval-tire-rotation')
    // $('#js-update-interval-car-inspection')
    // $('#js-update-interval-brake-inspection')
    // $('#js-update-interval-wiper-blades')
  }
};
