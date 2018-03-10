/*
*  main.js to receive user input,
*  translate to method calls to objects:
*    googleApi  | (google maps API - local service provider locations)
*    vehicleApi | (NHTSA API - source info for year/make/model)
*    db         | (Firebase database)
*    
*/

 
 
 $(document).ready(function() {

// Initialize collapse button
$(".button-collapse").sideNav();
// Initialize collapsible dropdown
$('.collapsible').collapsible();
      
$('.button-collapse').sideNav({
 menuWidth: 300, // Default is 300
 edge: 'left', // Choose the horizontal origin
 closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
 draggable: true, // Choose whether you can drag to open on touch screens,
 // onOpen: function(el) { /* Do Stuff* / }, // A function to be called when sideNav is opened
 // onClose: function(el) { /* Do Stuff* / }, // A function to be called when sideNav is closed
});

  $('select').material_select();
});
  
  
    