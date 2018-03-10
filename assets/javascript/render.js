const DOM = {
  // render 'cars' to the browser
  renderCars(carsObject) {

    // If object not empty
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
  },
  // render 'lastMaintenance'
  renderLastMaintenance(object) {
    // Please pass to me the object returned by db.getLastMaintenance()

    // $('#js-display-last-oil-change')
    // $('#js-display-last-tire-rotation')
    // $('#js-display-last-car-inspection')
    // $('#js-display-last-brake-inspection')
    // $('#js-display-last-wiper-blades')
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