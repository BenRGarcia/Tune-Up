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
// Sample schema of database
{
  "defaultMaintenance" : {
    "brakeInspectionMonths" : 12,
    "carInspectionMonths" : 12,
    "oilChange" : 3000,
    "tireRotation" : 6000,
    "wiperBladesMonths" : 6
  },
  "users" : {

    "authUid1" : {
      "-LakjnwowPEPKFksda" : {
        "lastMaintenance" : {
          "brakeInspection" : 12000,
          "carInspectionUTC" : 1360013296,
          "oilChange" : 30000,
          "tireRotation" : 29500,
          "wiperBladesUTC" : 1360013296
        },
        "maintenanceInterval" : {
          "brakeInspectionMonths" : 12,
          "carInspectionMonths" : 12,
          "oilChange" : 3000,
          "tireRotation" : 6000,
          "wiperBladesMonths" : 6
        },
        "make" : "honda",
        "mileage" : 33000,
        "model" : "civic",
        "year" : 2015
      },
      "-PakjnwowPEPKFksda" : {
        "lastMaintenance" : {
          "brakeInspection" : 12000,
          "carInspectionUTC" : 1360013296,
          "oilChange" : 30000,
          "tireRotation" : 29500,
          "wiperBladesUTC" : 1360013296
        },
        "maintenanceInterval" : {
          "brakeInspectionMonths" : 12,
          "carInspectionMonths" : 12,
          "oilChange" : 3000,
          "tireRotation" : 6000,
          "wiperBladesMonths" : 6
        },
        "make" : "jeep",
        "mileage" : 33000,
        "model" : "commander",
        "year" : 2015
      }
    },
    "authUid2" : {
      "-LakjnwowPEPKFksda" : {
        "lastMaintenance" : {
          "brakeInspection" : 12000,
          "carInspectionUTC" : 1360013296,
          "oilChange" : 30000,
          "tireRotation" : 29500,
          "wiperBladesUTC" : 1360013296
        },
        "maintenanceInterval" : {
          "brakeInspectionMonths" : 12,
          "carInspectionMonths" : 12,
          "oilChange" : 3000,
          "tireRotation" : 6000,
          "wiperBladesMonths" : 6
        },
        "make" : "honda",
        "mileage" : 33000,
        "model" : "civic",
        "year" : 2015
      },
      "-PakjnwowPEPKFksda" : {
        "lastMaintenance" : {
          "brakeInspection" : 12000,
          "carInspectionUTC" : 1360013296,
          "oilChange" : 30000,
          "tireRotation" : 29500,
          "wiperBladesUTC" : 1360013296
        },
        "maintenanceInterval" : {
          "brakeInspectionMonths" : 12,
          "carInspectionMonths" : 12,
          "oilChange" : 3000,
          "tireRotation" : 6000,
          "wiperBladesMonths" : 6
        },
        "make" : "jeep",
        "mileage" : 33000,
        "model" : "commander",
        "year" : 2015
      }
    }
  }
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