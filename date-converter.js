const dateConverter = {

  mmddyyyyToUnixTime : 
   function(mmddyyyy){
    var date = mmddyyyy;
    var unixTime = new Date(date).getTime() / 1000;
    console.log(unixTime, "Convert to Unix");
    return unixTime;
  },

  unixTimeTommddyyyy :
    function(unixTime) {
      var unix = moment.unix(unitTime)._d;
      var unixFormat = moment(unix).format("MM/DD/YYYY");
        console.log(unixFormat, "Convert to Date");
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



// $(document).ready(function(){  

//     var oilDate =  $("#oilDate").val();
//     var newOilDate = moment(oilDate).add(3, 'M');
//     console.log(oilDate, "oilDate");
//     console.log(newOilDate, "newOilDate");

  
//   }
  // //Add 3 months to current date
  // var currentDate = moment();
  // var futureMonth = moment(currentDate).add(3, 'M');
  // var futureMonthEnd = moment(futureMonth).endOf('month');

  // if(currentDate.date() != futureMonth.date() && futureMonth.isSame(futureMonthEnd.format('YYYY-MM-DD'))) {
  //   futureMonth = futureMonth.add(1, 'd');
  // }
  // console.log(currentDate, "currentDate");
  // console.log(currentDate.utc().valueOf(), "UTC value");
  // console.log(futureMonth, "futureDate");

  // //create a date from UNIX timestamp
  // var unix = moment.unix(1520561224);
  //   console.log(unix, "unix to date");
  // var UTC = unix.utc();
  //   console.log(UTC, "new UTC");

  // //create UNIX from a date
  // var date = new Date(moment()).getTime() / 1000;
  // console.log(date, "date to unix")

// });