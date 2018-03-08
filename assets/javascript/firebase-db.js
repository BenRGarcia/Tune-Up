/*
 *  firebase-db.js to contain all code with respect to the database.
 */

const db = {
  /* 
   *  All firebase properties/methods 
   *  go inside this object 
   */
};

/*
Maintenence Schedule data source:
https://www.autozone.com/repairinfo/carCareAwareMain.jsp
*/

/*
// Sample schema of database

"users": { // <------------------- Root/Node #1 "users"
  "$uid...1": {
    "cars": {
      "firebaseKeyGen": {
        "year":       2015, 
        "make":    "HONDA",
        "model":   "CIVIC",
        "mileage":   33000,
        "maintenanceInterval": {
          "oilChange":             3000,
          "tireRotation":          6000,
          "brakeInspectionMonths":   12, // months
          "carInspectionMonths":     12, // months
          "wiperBladesMonths":        6  // months
        },
        "lastMaintenance": {
          "oilChange":             30000,
          "tireRotation":          29500,
          "brakeInspection":       12000,
          "carInspectionUTC": 1360013296, // UTC
          "wiperBladesUTC":   1360013296  // UTC
        }
      },
      "firebaseKeyGen": {...car2},
      "firebaseKeyGen": {...car3}
    }
  },
  "$uid...2": {...}
},
"defaultMaintenance": { // <------- Root/Node #2 "defaultMaintenance"
  "oilChange":             3000,
  "tireRotation":          6000,
  "brakeInspectionMonths":   12, // months
  "carInspectionMonths":     12, // months
  "wiperBladesMonths":        6  // months
}
*/

/*
Firebase db rules:
{
  "rules": {
    "users": {
      "$uid": {
        ".write": "$uid === auth.uid",
        ".read": "$uid === auth.uid"
      }
    },
    "defaultMaintenance": {
      ".write": false,
      ".read": "auth != null"
    }
  }
}
*/