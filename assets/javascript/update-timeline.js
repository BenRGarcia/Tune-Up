const updateTimeline = {

    render: function(object){
        //call Id's where the information goes, display
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
