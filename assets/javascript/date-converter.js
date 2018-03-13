const dateConverter = {

  mmddyyyyToUnixTime(mmddyyyy) { 
   // Establish format of passed argument
   let format = "YYYY/MM/DD";
   // Convert Date for moment.js
   let convertedDate = moment(mmddyyyy, format);
   // Reformat date as Unix Time
   let unixTime = moment(convertedDate).format("X");
   return unixTime;
  },

  unixTimeTommddyyyy(unixTime) {
    // Establish format of passed argument
    let format = "X";
    // Convert Date for moment.js
    let convertedDate = moment(unixTime, format);
    // Reformat date as MM DD YYYY
    let mmddyyyy = moment(convertedDate).format("MM/DD/YYYY");
    return mmddyyyy;
  },
  addCarMonths :
    function(mmddyyyy){
      var date = mmddyyyy;
      var interval = $("#js-update-interval-car-inspection").val();
      var newDate = moment(date).add(interval, 'M');

      console.log(newDate, "Next Car Inspection");

      return newDate;
    },

    addBrakeMonths :
    function(mmddyyyy){
      var date = mmddyyyy;
      var interval = $("#js-update-interval-brake-inspection").val();
      var newDate = moment(date).add(interval, 'M');

      console.log(newDate, "Next Brake Inspection");

      return newDate;
    },

    addWiperMonths :
    function(mmddyyyy){
      var date = mmddyyyy;
      var interval = $("#js-update-interval-wiper-blades").val();
      var newDate = moment(date).add(interval, 'M');

      console.log(newDate, "Next Wiper Blades");

      return newDate;
    },

    //this doesn't make sense because we don't know the last date of their oil change. 
    //would it be easier to change oil and tire rotation into months?

    addOilMonths:
    function(miles){
      var miles = $("#js-update-last-oil-change");
      var divideMiles = (miles) / 3;
      var nextOilChange = moment().add(divideMiles, 'M');

      console.log(nextOilChange, "next Oil Change")
    },

    addTireMonths:
    function(miles){
      var miles = $("#js-update-last-tire-rotation");
      var divideMiles = (miles) / 3;
      var nextTireRotations = moment().add(divideMiles, 'M');

      console.log(nextTireRotations, "next Tire Rotation")
    }
};
