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

     let carInspectionTimeline = addCarMonths.attr("data-date",addCarMonths);
     let brakeInspectionTimeline = addBrakeMonths.attr("data-date",addBrakeMonths);
     let wiperBladeTimeline = addWiperMonths.attr("data-date",addWiperMonths);
     let oilChangeTimeline = addOilMonths.attr("data-date",addOilMonths);
     let tireRotationTimeline = addTireMonths.attr("data-date",addTireMonths);
     
    //  var list = "timelineDates"

    //  if(!Array.isArray(list)){
    //         list= [];
    //     }
    
    $("#timelineDates").empty();
    $("#timelineDisplay").empty(); 

    if(carInspectionTimeline){
        var tDateCarInspection = ('<li><a href="#0">'+ carInspectionTimeline +'</a></li>');
        
        var tDateCarInspectionDisplay = ('<li>');
        tDateCarInspectionDisplay.attr(carInspectionTimeline);
        tDateCarInspectionDisplay.attr("id", "js-timeline-title-car-inspection");
        tDateCarInspection.append('<h2>' + 'CAR INSPECTION' + '</h2>');

        $("#timelineDates").append(tDateCarInspection);
        $("#timelineDisplay").append(tDateCarInspectionDisplay);

    };

    if(brakeInspectionTimeline){
        var tDateBrakeInspection = ('<li><a href="#0">'+ brakeInspectionTimeline +'</a></li>');
        
        var tDateBrakeInspectionDisplay = ('<li>');
        tDateBrakeInspectionDisplay.attr(brakeInspectionTimeline);
        tDateBrakeInspectionDisplay.attr("id", "js-timeline-title-brake-inspection");
        tDateBrakeInspection.append('<h2>' + 'BRAKE INSPECTION' + '</h2>');

        $("#timelineDates").append(tDateBrakeInspection);
        $("#timelineDisplay").append(tDateBrakeInspectionDisplay);

    };

    if(wiperBladeTimeline){
        var tDateWiperBlade = ('<li><a href="#0">'+ wiperBladeTimeline +'</a></li>');
        
        var tDateWiperBladeDisplay = ('<li>');
        tDateWiperBladeDisplay.attr(wiperBladeTimeline);
        tDateWiperBladeDisplay.attr("id", "js-timeline-title-wiper-blades");
        tDateWiperBlade.append('<h2>' + 'CHECK WIPER BLADES' + '</h2>');

        $("#timelineDates").append(tDateWiperBlade);
        $("#timelineDisplay").append(tDateWiperBladeDisplay);

    };

    if(oilChangeTimeline){
        var tDateOilChange = ('<li><a href="#0">'+ oilChangeTimeline +'</a></li>');
        
        var tDateOilChangeDisplay = ('<li>');
        tDateOilChangeDisplay.attr(oilChangeTimeline);
        tDateOilChangeDisplay.attr("id", "js-timeline-title-oil-change");
        tDateOilChange.append('<h2>' + 'CHANGE OIL' + '</h2>');

        $("#timelineDates").append(tDateOilChange);
        $("#timelineDisplay").append(tDateOilChangeDisplay);
    };

    if(tireRotationTimeline){
        var tDateTireRotation = ('<li><a href="#0">'+ tireRotationTimeline +'</a></li>');
        
        var tDateTireRotationDisplay = ('<li>');
        tDateTireRotationDisplay.attr(tireRotationTimeline);
        tDateTireRotationDisplay.attr("id", "js-timeline-title-tire-change");
        tDateTireRotation.append('<h2>' + 'TIRE ROTATION' + '</h2>');

        $("#timelineDates").append(tDateTireRotation);
        $("#timelineDisplay").append(tDateTireRotationDisplay);
    };

    

         // var insideList = "timelineDates"   

        //  if(!Array.isArray(insideList)){
        //      insideList = [];
        //  }

        //  for(var i = 0; i < insideList.length; i++){
        //     var tDates = ("<li>").

     
      // Declare variables
    //   let lastOilChange       = object.oilChange;
    //   let lastTireRotation    = object.tireRotation;
    //   let lastCarInspection   = object.carInpectionUnixTime;
    //   let lastBrakeInspection = object.brakeInspectionUnixTime;
    //   let lastWiperBlades     = object.wiperBladesUnixTime;

      // Update DOM
    //   $('#timelineDates').append(carInspectionTimeline);
    //   $('#timelineDates').append(brakeInspectionTimeline);
    //   $('#timelineDates').append(wiperBladeTimeline);
    //   $('#timelineDates').append(oilChangeTimeline);
    //   $('#timelineDates').append(tireRotationTimeline);

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
