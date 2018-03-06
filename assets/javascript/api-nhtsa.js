/*
API DOC's:
https://vpic.nhtsa.dot.gov/api/
*/

const vehicleApi = {
  /* 
   *  All NHTSA api properties/methods 
   *  go inside this object 
   */
  // Possible Vehicle Makes
  makes: [
    "Acura","Alfa Romeo","Aston Martin","Audi","Bentley","BMW","Buick",
    "Cadillac","Chevrolet","Chrysler","Dodge","Ferrari","FIAT","Ford",
    "Freightliner","Genesis","GMC","Honda","Hyundai","INFINITI","Jaguar",
    "Jeep","Kia","Lamborghini","Land Rover","Lexus","Lincoln","Lotus",
    "Maserati","Mazda","McLaren","Mercedes-Benz","MINI","Mitsubishi",
    "Nissan","Porsche","Ram","Rolls-Royce","smart","Subaru","Tesla",
    "Toyota","Volkswagen","Volvo"
  ],
  // Query Parameters
  url: "https://vpic.nhtsa.dot.gov/api/vehicles",

};

/*
1) User selects Year

2) User selects Make - (Hard coded list of car 'makes')
   - causes propagation of available models from NHTSA API

   "Passenger%20Car"
   "Truck"

   Problem: Take the year and the make, return all possible models (exclude motorcycle, trailers, etc.)

   Sample query url to use to find all possible vehicle models available for a make:
   https://vpic.nhtsa.dot.gov/api/vehicles
    
3) User selects Model

4) User inputs mileage

5) Form is submitted

*/