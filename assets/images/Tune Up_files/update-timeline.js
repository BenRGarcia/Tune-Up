const maintenanceTimeline = {
    monthMiles: 1000,
    calculateNext: function(carObject){

        let maintenanceObject = {};

        
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

        let currentMileage =carObject.mileage;

    /*
     *  Compute Date Math Stuff, Add properties to object if truthy
    // **/
    // If not falsey
    if (oilLast) {
        // Compute Miles Oil Change
        let diff = currentMileage - oilLast;
        let oilDiff = oilInterval - diff;
        let oilDivide = oilDiff / this.monthMiles;
        let oilMath = moment().add(oilDivide, 'M');
        let oilDefine = oilMath._d;
        let nextOil = moment(oilMath).format("MM/DD/YYYY");
        console.log(nextOil, "NEXT OIL");
        // Add property to maintenance object
        maintenanceObject.oil = nextOil;
        let li = $('<li>');
        let nextOilList = li.text("Next Oil---  " + nextOil);
        $('#toDoList').append(nextOilList);
        if(oilDefine <= moment()){
          nextOilList.addClass("overdue");
        }

      }
  
    //   // If not falsey
      if (tireLast) {
        // Compute Miles Tire Change
        let diff = currentMileage - tireLast;
        let tireDiff = tireInterval - diff;
        let tireDivide = tireDiff / this.monthMiles;
        let tireMath = moment().add(tireDivide, 'M');
        let tireDefine = tireMath._d;
        let nextTire = moment(tireMath).format("MM/DD/YYYY");
        console.log(nextTire, "NEXT TIRE");
        // Add property to maintenance object
        maintenanceObject.tire = nextTire;
        let li = $('<li>');
        let nextTireList = li.text("Next Tire Rotation---  " + nextTire);
        $('#toDoList').append(nextTireList);
        if(tireDefine <= moment()){
          nextTireList.addClass("overdue");
        }
      }
  
      // If not falsey
      if (brakeLast) {
        // Compute Months Brake Change
        let brakeLastUnix = dateConverter.unixTimeTommddyyyy(brakeLast);
        let nextBrakeMath = moment(brakeLastUnix).add(brakeInterval, 'M');
        let nextBrakeDefine = nextBrakeMath._d;
        let nextBrake = moment(nextBrakeDefine).format("MM/DD/YYYY");
        console.log(nextBrake, "NEXT BRAKE");
        // Add property to maintenance object
        maintenanceObject.brake = nextBrake;
        let li = $('<li>');
        let nextBrakeList = li.text("Next Brake Inspection---  " + nextBrake);
        $('#toDoList').append(nextBrakeList);
        if(nextBrakeDefine <= moment()){
          nextBrakeList.addClass("overdue");
        }
      }
  
      // If not falsey
      if (inspectionLast) {
        // Compute Months Inspection Change
        let inspectionLastUnix = dateConverter.unixTimeTommddyyyy(inspectionLast);
        let nextInspectionMath = moment(inspectionLastUnix).add(inspectionInterval, 'M');
        let nextInspectionDefine = nextInspectionMath._d;
        let nextInspection = moment(nextInspectionDefine).format("MM/DD/YYYY");
        console.log(nextInspection, "NEXT INSPECTION");
        // Add property to maintenance object
        maintenanceObject.inspection = nextInspection;
        let li = $('<li>');
        let nextInspectionList = li.text("Next Car Inspection---  " + nextInspection);
        $('#toDoList').append(nextInspectionList);
        if(nextInspectionDefine <= moment()){
          nextInspectionList.addClass("overdue");
        }
      }
  
      // If not falsey
      if (wiperLast) {
        // Compute Months Wiper Change
        let wiperLastUnix = dateConverter.unixTimeTommddyyyy(wiperLast);
        let nextWiperMath = moment(wiperLastUnix).add(wiperInterval, 'M');
        let nextWiperDefine = nextWiperMath._d;
        let nextWiper = moment(nextWiperDefine).format("MM/DD/YYYY");
        console.log(nextWiper, "NEXT WIPER");
        // Add property to maintenance object
        maintenanceObject.wiper = nextWiper;
        let li = $('<li>');
        let nextWiperList = li.text("Replace Wiper Blades--- " + nextWiper);
        $('#toDoList').append(nextWiperList);
        if(nextWiperDefine <= moment()){
          nextWiperList.addClass("overdue");
        }
      }
  
      console.log(maintenanceObject);
      return maintenanceObject;
        

        return maintenanceObject;
        console.log(carObject); 
    }
    
}