const updateTimeline = {

    render: function(object){

     let inspectionDate = $('#js-display-last-car-inspection').val();
     let brakeDate = $('#js-display-last-brake-inspection').val();
     let wiperBladeDate = $('#js-display-last-wiper-blades').val();
     let oilChangeMileage = $('#js-display-last-oil-change').val();
     let tireRotationMileage = $('#js-display-last-tire-rotation').val();

     let addCarMonths = dateConverter.addCarMonths(inspectionDate);
     let addBrakeMonths = dateConverter.addBrakeMonths(brakeDate);
     let addWiperMonths = dateConverter.addWiperMonths(wiperBladeDate);
     let addOilMonths = dateConverter.addOilMonths(oilChangeMileage);
     let addTireMonths = dateConverter.addTireMonths(tireRotationMileage);

    //  let carInpectionUnixTime = dateConverter.unixTimeTommddyyyy(inspectionDate);
    //  let brakeInpectionUnixTime = dateConverter.unixTimeTommddyyyy(brakeDate);
    //  let wiperBladesUnixTime = dateConverter.unixTimeTommddyyyy(wiperBladeDate);    

     let carInspectionTimeline = addCarMonths.data("date");
     let brakeInspectionTimeline = addBrakeMonths.data("date");
     let wiperBladeTimeline = addWiperMonths.data("date");
     let oilChangeTimeline = addOilMonths.data("date");
     let tireRotationTimeline = addTireMonths.data("date");

      // Declare variables
    //   let lastOilChange       = object.oilChange;
    //   let lastTireRotation    = object.tireRotation;
    //   let lastCarInspection   = object.carInpectionUnixTime;
    //   let lastBrakeInspection = object.brakeInspectionUnixTime;
    //   let lastWiperBlades     = object.wiperBladesUnixTime;

      // Update DOM
      $('#timelineDates').append(carInspectionTimeline);
      $('#timelineDates').append(brakeInspectionTimeline);
      $('#timelineDates').append(wiperBladeTimeline);
      $('#timelineDates').append(oilChangeTimeline);
      $('#timelineDates').append(tireRotationTimeline);

        //CREATE ARRAY, 
        //PUSH DATA TO ARRAY, 
        //FOR EACH METHOD THAT DYNAMICALLY CREATES LI ITEMS FOR TIMELINEDATES ID 


        //call Id's where the information goes, di
        console.log(object);

        // Ignore empty object
        if (object) {

        // Declare variables
            let oilChange       = object.oilChange;
            let tireRotation    = object.tireRotation;
            let carInspection   = object.carInspectionUnixTime;
            let brakeInspection = object.brakeInspectionUnixTime;
            let wiperBlades     = object.wiperBladesUnixTime;
    
        // Convert to human readable dates if present
            if (carInspection) {
            carInspection = dateConverter.unixTimeTommddyyyy(object.carInspectionUnixTime);
            }
            if (brakeInspection) {
            brakeInspection = dateConverter.unixTimeTommddyyyy(object.brakeInspectionUnixTime);
            }
            if (wiperBlades) {
            wiperBlades = dateConverter.unixTimeTommddyyyy(object.wiperBladesUnixTime);
            }
        }
    }
}
// one function that updates the timeline
//render function that displays timeline based on the current data--any intervals and last maintenance dates
//for each add li items to dom and add content

//  updateTimeline.render(response);
    //add this to the main.js under DOM.
