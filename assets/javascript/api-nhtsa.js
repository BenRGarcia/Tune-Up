/*
 * How to use this object:
 *   - Access the array of available car 'makes' like this:
 *       vehicleApi.makes;
 *   - To initiate api call, call method like this, passing in the actual string of a make of vehicle: 
 *       vehicleApi.searchModel(make);
 *   - In either case, you will receive an array of makes or models in response
*/

const vehicleApi = {
  /*
  API DOC's:
  https://vpic.nhtsa.dot.gov/api/
  */
  // Available Vehicle Makes
  _makes: [
    "Acura","Audi","BMW","Buick","Cadillac","Chevrolet","Chrysler","Dodge",
    "FIAT","Ford","Genesis","GMC","Honda","Hyundai","INFINITI","Jaguar","Jeep",
    "Kia","Land Rover","Lexus","Lincoln","Lotus","Mazda","Mercedes-Benz","MINI",
    "Mitsubishi","Nissan","Porsche","Ram","smart","Subaru","Tesla","Toyota",
    "Volkswagen","Volvo"
  ],
  // Query Parameters
  _url: "https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/",
  // Model year
  _year: "/modelyear/",
  // Will return 'Truck' vehicle type
  _truck: "/vehicleType/truck?format=json",
  // Will return 'Car' and 'SUV' vehicle type
  _car: "/vehicleType/passenger?format=json",
  // Return value of last api call
  _modelObjArray: [],
  get makes() {
    return this._makes;
  },
  get models() {
    let modelNameArray = this._modelObjArray.map(obj => obj.Model_Name);
    console.log(`modelNameArray: ${modelNameArray}`);
    return modelNameArray;
  },
  searchModel(year, make) {
    // Ignore 'falsy' 'make' arg passed
    if (make) {
      // Convert year argument to string (in case passed as type number)
      let stringYear = year.toString();
      // Get query URL for cars and suvs
      let carQueryUrl = this.createCarQueryUrl(year, make);
      console.log(`carQueryUrl: ${carQueryUrl}`);
      // Get query URL for trucks
      let truckQueryUrl = this.createTruckQueryUrl(year, make);
      console.log(`truckQueryUrl: ${truckQueryUrl}`);
      // Call API with both query URL's
      let carObjArray = this.callAPI(carQueryUrl, truckQueryUrl);
      console.log(`carObjArray: ${carObjArray}`);
      return carObjArray;
    }
    console.log(`vehicleApi.searchModel() 'make' falsy value passed: ${make}`);
    return make;
  },
  createCarQueryUrl(year, make) {
    return this._url + make + this._year + year + this._truck;
  },
  createTruckQueryUrl(year, make) {
    return this._url + make + this._year + year + this._car;
  },
  callAPI(carsUrl, trucksUrl) {
    let carObjArray;
    // 2 async calls (one for car/suv models, one for trucks -- API limitation)
    $.when( $.ajax(carsUrl), $.ajax(trucksUrl) ).then( (a1, a2) => {
      // If success, combine 2 response object 'Results' arrays
      carObjArray = a1[0].Results.concat(a2[0].Results);
      return carObjArray;
    }, (err) => {
      console.log(`vehicleApi call error thrown: ${err}`);
    }
    );
  }
};
