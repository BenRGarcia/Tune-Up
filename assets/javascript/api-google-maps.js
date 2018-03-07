/*
API DOC's:
https://developers.google.com/maps/documentation/javascript/
https://developers.google.com/maps/documentation/javascript/examples/place-search
*/
const googleApi = {
  apiKey: "AIzaSyB0YC_GpZvlge7TTOgdNhujspZ8yjdbvQU"
  /* 
   *  All google api properties/methods 
   *  go inside this object 
   * 
   */
  
};
var map;
var service;
//grabs search results and adds a marker to each
function handleSearchResults(results, status){
  console.log(results);
  if (status == google.maps.places.PlacesServiceStatus.OK){
    for (var i = 0; i < results.length; i++){
      var marker = new google.maps.Marker({
        position: results[i].geometry.location,
        map: map,
     });
    }
  }
}
//searchs for location inside the bounds of the mapview
function search(){
  var request = {
    bounds: map.getBounds(),
    name: "Autoparts"
  }
  service.nearbySearch(request, handleSearchResults);
}

//finds currentLcation and creates a map for it
function initialize(location){
  console.log(location);

  var currentLocation = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);

  var mapOptions = {
    center: currentLocation,
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
//displays map to DOM
map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

//creates marker for current location
var marker = new google.maps.Marker({
    position: currentLocation,
    map: map,
 });

 service = new google.maps.places.PlacesService(map);

 //waits untils bounds are set to run search function
 google.maps.event.addListenerOnce(map,'bounds_changed', search);


 //adds circle to current location with a radius of 10,000 meters
 var circleOptions = {
  strokeColor: "#0000FF",
  strokeOpacity: 0.8,
  strokeWeight: 1.5,
  fillColor: "#0000FF",
  fillOpacity: 0.35,
  map: map,
  center: currentLocation,
  radius: 10000
};

var circle = new google.maps.Circle(circleOptions);
}

$(document).ready(function(){
  navigator.geolocation.getCurrentPosition(initialize);
});
