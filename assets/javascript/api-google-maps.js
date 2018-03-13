/*
API DOC's:
https://developers.google.com/maps/documentation/javascript/
https://developers.google.com/maps/documentation/javascript/examples/place-search
*/
const googleApi = {
  apiKey: "AIzaSyB0YC_GpZvlge7TTOgdNhujspZ8yjdbvQU",
  
  map: null,
  service: null,

  //grabs search results and adds a marker to each
  handleSeachResults : 
    function(results, status){

    if (status == google.maps.places.PlacesServiceStatus.OK){
      for (var i = 0; i < results.length; i++){
        let marker = new google.maps.Marker({
          position: results[i].geometry.location,
          map: map
       });
      marker.addListener('click', function() {
        map.setZoom(20);
        map.setCenter(marker.getPosition());
      });
    }  
  }
},
  //searchs for location inside the bounds of the mapview
  search: 
  function(){
    let request = {
      bounds: map.getBounds(),
      query: "Auto"
  }
  service.textSearch(request, googleApi.handleSeachResults);
  
},
  //finds currentLcation and creates a map for it
  initialize:
  function(location){
    
      var currentLocation = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);

      var mapOptions = {
        center: currentLocation,
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      //displays map to DOM
      map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

      var image = 'assets/images/youAreHere.jpg';
      //creates marker for current location
      var marker = new google.maps.Marker({
          position: currentLocation,
          map: map,
          icon: image
      });
     
      service = new google.maps.places.PlacesService(map);

      //waits untils bounds are set to run search function
      google.maps.event.addListenerOnce(map,'bounds_changed', googleApi.search);
    }
};

$(document).ready(function(){
  navigator.geolocation.getCurrentPosition(googleApi.initialize);
  });



