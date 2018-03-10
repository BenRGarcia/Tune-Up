const DOM = {
  // render 'cars' to the browser
  renderCars(carsObject) {
    // Please pass to me the object of objects returned by db.getAllUserCars()

    // If object not empty
    if (carsObject) {

      // Iterate over car objects
      for (let key in carsObject) {

        // 

        // Strip out year, make, model for object

      }

    }


    // $('.js-display-car-details')
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