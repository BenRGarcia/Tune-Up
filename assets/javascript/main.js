/*
*  main.js to receive user input,
*  translate to method calls to objects:
*    googleApi  | (google maps API - local service provider locations)
*    vehicleApi | (NHTSA API - source info for year/make/model)
*    db         | (Firebase database)
*    
*/

$(document).ready(function(){  

  var oilDate = "12/20/1988" 
// $("#oilDate").val().trim();
  var newOilDate = moment(oilDate).add(3, 'M');
  console.log(oilDate, "oilDate");
  console.log(newOilDate, "newOilDate");

  function convertToUnix(){
    var unix = new Date(newOilDate).getTime() / 1000;
    console.log(unix, "newOilDate Unix");
  }

  convertToUnix();

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
});
