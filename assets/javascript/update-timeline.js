const maintenanceTimeline = {
    monthMiles: 1000,
    calculateNext: function(carObject){

        let maintenanceObject = {};

        console.log(carObject); 
        //last maintenance calls
        let oilLast = carObject.lastMaintenance.oilChange;
        let tireLast = carObject.lastMaintenance.tireRotation;
        let brakeLast = carObject.lastMaintenance.brakeInspectionUnixTime;
        let inspectionLast = carObject.lastMaintenance.carInspectionUnixTime;
        let wiperLast = carObject.lastMaintenance.wiperBladesUnixTime;
        
        //interval calls
        let oilInterval = carObject.maintenanceInterval.oilChange;
        let tireInterval = carObject.maintenanceInterval.tireRotation;
        let brakeInterval = carObject.maintenanceInterval.brakeInspectionMonths;
        let inspectionInterval = carObject.maintenanceInterval.carInspectionMonths;
        let wiperInterval = carObject.maintenanceInterval.wiperBladesMonths;


 /*
     *  Compute Date Math Stuff, Add properties to object if truthy
    // **/
    // If not falsey
    if (oilLast) {
        // Compute Miles Oil Change
        let nextOil = ?; // should store something like "2018/03/28"
        // Add property to maintenance object
        maintenanceObject.oil = nextOil;
      }
  
      // If not falsey
      if (tireLast) {
        // Compute Miles Tire Change
        let nextTire = ?; // should store something like "2018/03/28"
        // Add property to maintenance object
        maintenanceObject.tire = nextTire;
      }
  
      // If not falsey
      if (brakeLast) {
        // Compute Months Brake Change
        let nextBrake = ?; // should store something like "2018/03/28"
        // Add property to maintenance object
        maintenanceObject.brake = nextBrake;
      }
  
      // If not falsey
      if (inspectionLast) {
        // Compute Months Inspection Change
        let nextInspection = ?; // should store something like "2018/03/28"
        // Add property to maintenance object
        maintenanceObject.inspection = nextInspection;
      }
  
      // If not falsey
      if (wiperLast) {
        // Compute Months Wiper Change
        let nextWiper = ?; // should store something like "2018/03/28"
        // Add property to maintenance object
        maintenanceObject.wiper = nextWiper;
      }
  
      console.log(maintenanceObject);
      return maintenanceObject;
        

        return maintenanceObject;

    }
}



    

        // addCarMonths :
        // function(mmddyyyy){
        //   var date = mmddyyyy;
        //   var interval = $("#js-update-interval-car-inspection").val();
        //   var newDate = moment(date).add(interval, 'M');
    
        //   console.log(newDate, "Next Car Inspection");
    
        //   return newDate;
        // },
    
        // addBrakeMonths :
        // function(mmddyyyy){
        //   var date = mmddyyyy;
        //   var interval = $("#js-update-interval-brake-inspection").val();
        //   var newDate = moment(date).add(interval, 'M');
    
        //   console.log(newDate, "Next Brake Inspection");
    
        //   return newDate;
        // },
    
        // addWiperMonths :
        // function(mmddyyyy){
        //   var date = mmddyyyy;
        //   var interval = $("#js-update-interval-wiper-blades").val();
        //   var newDate = moment(date).add(interval, 'M');
    
        //   console.log(newDate, "Next Wiper Blades");
    
        //   return newDate;
        // },
    
        // //this doesn't make sense because we don't know the last date of their oil change. 
        // //would it be easier to change oil and tire rotation into months?
    
        // addOilMonths:
        // function(miles){
        //   var miles = $("#js-update-interval-oil-change").val();
        //   var divideMiles = miles/1000;
        //   var nextOilChange = moment().add(divideMiles, 'M');
        //   console.log(miles, "miles");
        //   console.log(divideMiles, "divide miles");
        //   console.log(nextOilChange._d, "next Oil Change");
        // },
    
        // addTireMonths:
        // function(miles){
        //   var miles = $("#js-update-last-tire-rotation");
        //   var divideMiles = (miles) / 1000;
        //   var nextTireRotations = moment().add(divideMiles, 'M');
    
        //   console.log(nextTireRotations._d, "next Tire Rotation")
        // }


    //  let inspectionDate = $('#js-display-last-car-inspection').val();
    //  let brakeDate = $('#js-display-last-brake-inspection').val();
    //  let wiperBladeDate = $('#js-display-last-wiper-blades').val();
    //  let oilChangeMileage = $('#js-display-last-oil-change').val();
    //  let tireRotationMileage = $('#js-display-last-tire-rotation').val();

    //  console.log(inspectionDate,"Inspect date");
    //  console.log(brakeDate,"brake date");
    //  console.log(wiperBladeDate,"wiper blade date");
    //  console.log(oilChangeMileage,"oil mileage");
    //  console.log(tireRotationMileage,"tire rotation mileage");
     

    //  let addCarMonths = dateConverter.addCarMonths(inspectionDate);
    //  let addBrakeMonths = dateConverter.addBrakeMonths(brakeDate);
    //  let addWiperMonths = dateConverter.addWiperMonths(wiperBladeDate);
    //  let addOilMonths = dateConverter.addOilMonths(oilChangeMileage);
    //  let addTireMonths = dateConverter.addTireMonths(tireRotationMileage);  

    //  let carInspectionTimeline = addCarMonths.attr("data-date",addCarMonths);
    //  let brakeInspectionTimeline = addBrakeMonths.attr("data-date",addBrakeMonths);
    //  let wiperBladeTimeline = addWiperMonths.attr("data-date",addWiperMonths);
    //  let oilChangeTimeline = addOilMonths.attr("data-date",addOilMonths);
    //  let tireRotationTimeline = addTireMonths.attr("data-date",addTireMonths);
     

    // $("#timelineDates").empty();
    // $("#timelineDisplay").empty(); 

    // if(carInspectionTimeline){
    //     var tDateCarInspection = ('<li><a href="#0">'+ carInspectionTimeline +'</a></li>');
        
    //     var tDateCarInspectionDisplay = ('<li>');
    //     tDateCarInspectionDisplay.attr(carInspectionTimeline);
    //     tDateCarInspectionDisplay.attr("id", "js-timeline-title-car-inspection");
    //     tDateCarInspection.append('<h2>' + 'CAR INSPECTION' + '</h2>');

    //     $("#timelineDates").append(tDateCarInspection);
    //     $("#timelineDisplay").append(tDateCarInspectionDisplay);

    // };

    // if(brakeInspectionTimeline){
    //     var tDateBrakeInspection = ('<li><a href="#0">'+ brakeInspectionTimeline +'</a></li>');
        
    //     var tDateBrakeInspectionDisplay = ('<li>');
    //     tDateBrakeInspectionDisplay.attr(brakeInspectionTimeline);
    //     tDateBrakeInspectionDisplay.attr("id", "js-timeline-title-brake-inspection");
    //     tDateBrakeInspection.append('<h2>' + 'BRAKE INSPECTION' + '</h2>');

    //     $("#timelineDates").append(tDateBrakeInspection);
    //     $("#timelineDisplay").append(tDateBrakeInspectionDisplay);

    // };

    // if(wiperBladeTimeline){
    //     var tDateWiperBlade = ('<li><a href="#0">'+ wiperBladeTimeline +'</a></li>');
        
    //     var tDateWiperBladeDisplay = ('<li>');
    //     tDateWiperBladeDisplay.attr(wiperBladeTimeline);
    //     tDateWiperBladeDisplay.attr("id", "js-timeline-title-wiper-blades");
    //     tDateWiperBlade.append('<h2>' + 'CHECK WIPER BLADES' + '</h2>');

    //     $("#timelineDates").append(tDateWiperBlade);
    //     $("#timelineDisplay").append(tDateWiperBladeDisplay);

    // };

    // if(oilChangeTimeline){
    //     var tDateOilChange = ('<li><a href="#0">'+ oilChangeTimeline +'</a></li>');
        
    //     var tDateOilChangeDisplay = ('<li>');
    //     tDateOilChangeDisplay.attr(oilChangeTimeline);
    //     tDateOilChangeDisplay.attr("id", "js-timeline-title-oil-change");
    //     tDateOilChange.append('<h2>' + 'CHANGE OIL' + '</h2>');

    //     $("#timelineDates").append(tDateOilChange);
    //     $("#timelineDisplay").append(tDateOilChangeDisplay);
    // };

    // if(tireRotationTimeline){
    //     var tDateTireRotation = ('<li><a href="#0">'+ tireRotationTimeline +'</a></li>');
        
    //     var tDateTireRotationDisplay = ('<li>');
    //     tDateTireRotationDisplay.attr(tireRotationTimeline);
    //     tDateTireRotationDisplay.attr("id", "js-timeline-title-tire-change");
    //     tDateTireRotation.append('<h2>' + 'TIRE ROTATION' + '</h2>');

    //     $("#timelineDates").append(tDateTireRotation);
    //     $("#timelineDisplay").append(tDateTireRotationDisplay);
    // };

    //     //call Id's where the information goes, di
    //     console.log(object);

    //     // Ignore empty object
    //     if (object) {

    //     // Declare variables
    //         let oilChange       = object.oilChange;
    //         let tireRotation    = object.tireRotation;
    //         let carInspection   = object.carInspectionUnixTime;
    //         let brakeInspection = object.brakeInspectionUnixTime;
    //         let wiperBlades     = object.wiperBladesUnixTime;
    
    //     // Convert to human readable dates if present
    //         if (carInspection) {
    //         carInspection = dateConverter.unixTimeTommddyyyy(object.carInspectionUnixTime);
    //         }
    //         if (brakeInspection) {
    //         brakeInspection = dateConverter.unixTimeTommddyyyy(object.brakeInspectionUnixTime);
    //         }
    //         if (wiperBlades) {
    //         wiperBlades = dateConverter.unixTimeTommddyyyy(object.wiperBladesUnixTime);
    //         }
    //     }
 