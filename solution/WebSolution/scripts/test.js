var fullname="Ravi Tambade";
var count=56;
var status=false;
var ch='T';
//How to define object in Js


//JSON Object
var flower={
//  key :value
    "id":34,
    "title":"Rose",
    "description":"beautiful flower",
    "unitprice":15,
    "quantity":7000
};

//array of Flower
var flowers=[
    {"id":34,"title":"Rose","description":"beautiful flower","unitprice":15,"quantity":7000},
    {"id":35,"title":"Lotus","description":"beautiful flower","unitprice":15,"quantity":7000},
    {"id":36,"title":"Jasmine","description":"beautiful flower","unitprice":15,"quantity":7000},
    {"id":78,"title":"Lily","description":"beautiful flower","unitprice":15,"quantity":7000},
    {"id":89,"title":"Orchid","description":"beautiful flower","unitprice":15,"quantity":7000},
    {"id":98,"title":"Marigold","description":"beautiful flower","unitprice":15,"quantity":7000},
    {"id":354,"title":"Gerbera","description":"beautiful flower","unitprice":15,"quantity":7000}
];


var foundFlowers=flowers.filter((flower)=>(flower.title=='Rose'));
console.log("Searching flower........");

console.log(foundFlowers);




//Tree
var greenhouse1={
    "location": "Tambade mala",
    "timestamp": "2024-09-05T17:30:00Z",
     "climate_data": {
                        "temperature": {
                            "current": 22.5,
                            "unit": "Celsius"
                        },
                        "humidity": {
                            "current": 55,
                            "unit": "Percent"
                          },
                          "co2_level": {
                            "current": 350,
                            "unit": "ppm"
                          },
                          "light_intensity": {
                            "current": 1500,
                            "unit": "lux"
                          }
      },
      "control_settings": {
                            "temperature_target": 23.0,
                            "humidity_target": 60,
                            "co2_target": 400,
                            "light_target": 2000
      }
}



var acutators={
    "actuators": {
      "fans": {
        "status": "on",
        "speed": 3,  // Speed level (e.g., 1-5)
        "last_activated": "2024-09-05T11:45:00Z"
      },
      "heaters": {
        "status": "off",
        "target_temperature": 23.0,
        "last_activated": "2024-09-05T10:00:00Z"
      },
      "irrigation": {
        "status": "on",
        "duration": 30,  // Duration in minutes
        "last_activated": "2024-09-05T11:50:00Z"
      },
      "lights": {
        "status": "on",
        "intensity": 2000,
        "last_adjusted": "2024-09-05T12:00:00Z"
      }
    }
  }
  


  var alerts={
    "alerts": [
      {
        "type": "temperature",
        "message": "Temperature exceeds maximum threshold",
        "timestamp": "2024-09-05T12:05:00Z",
        "severity": "warning"
      },
      {
        "type": "humidity",
        "message": "Humidity level is below minimum threshold",
        "timestamp": "2024-09-05T12:10:00Z",
        "severity": "critical"
      }
    ]
  }
  
  var systemStatus={
    "system_status": {
      "uptime": "72 hours",
      "last_restart": "2024-09-02T10:00:00Z",
      "network_status": "online",
      "last_sync": "2024-09-05T11:55:00Z",
      "errors": []
    }
  }
  
  var userSettings={
    "user_settings": {
      "user_id": "12345",
      "preferences": {
        "temperature_unit": "Celsius",
        "notifications_enabled": true,
        "preferred_alert_level": "critical"
      },
      "last_login": "2024-09-04T09:30:00Z"
    }
  }

  
  var greenhouse_layout_zones={
    "greenhouse_layout": {
      "name": "Greenhouse A",
      "zones": [
        {
          "zone_id": "zone_1",
          "name": "Vegetable Zone",
          "dimensions": {
            "length": 20,  // in meters
            "width": 10    // in meters
          },
          "features": ["heating", "irrigation", "ventilation"]
        },
        {
          "zone_id": "zone_2",
          "name": "Flower Zone",
          "dimensions": {
            "length": 15,
            "width": 12
          },
          "features": ["cooling", "irrigation", "lighting"]
        }
      ]
    }
  }

  var energyConsumption={
    "energy_consumption": {
      "timestamp": "2024-09-05T12:00:00Z",
      "total_usage": {
        "unit": "kWh",
        "amount": 150.0
      },
      "consumption_by_device": [
        {
          "device": "heaters",
          "usage": 50.0,
          "unit": "kWh"
        },
        {
          "device": "lights",
          "usage": 70.0,
          "unit": "kWh"
        },
        {
          "device": "fans",
          "usage": 30.0,
          "unit": "kWh"
        }
      ]
    }
  }

  var plantGrowth={
    "plant_growth": [
      {
        "plant_id": "plant_001",
        "species": "Tomato",
        "height": 30,  // in centimeters
        "growth_stage": "flowering",
        "last_measurement": "2024-09-05T12:00:00Z"
      },
      {
        "plant_id": "plant_002",
        "species": "Rose",
        "height": 45,
        "growth_stage": "budding",
        "last_measurement": "2024-09-05T12:00:00Z"
      }
    ]
  }
  

  var historicalClimateData={
    "historical_climate_data": {
      "date_range": {
        "start": "2024-08-01",
        "end": "2024-08-31"
      },
      "data_points": [
        {
          "date": "2024-08-01",
          "temperature": {
            "average": 21.0,
            "unit": "Celsius"
          },
          "humidity": {
            "average": 60,
            "unit": "Percent"
          },
          "co2_level": {
            "average": 360,
            "unit": "ppm"
          },
          "light_intensity": {
            "average": 1400,
            "unit": "lux"
          }
        },
        {
          "date": "2024-08-02",
          "temperature": {
            "average": 22.0,
            "unit": "Celsius"
          },
          "humidity": {
            "average": 62,
            "unit": "Percent"
          },
          "co2_level": {
            "average": 355,
            "unit": "ppm"
          },
          "light_intensity": {
            "average": 1450,
            "unit": "lux"
          }
        }
      ]
    }
  }

  
  
  
  var maintainanceShedule={
    "maintenance_schedule": {
      "next_maintenance": "2024-09-15T00:00:00Z",
      "tasks": [
        {
          "task_id": "task_001",
          "equipment": "heaters",
          "description": "Clean and check heaters",
          "frequency": "monthly",
          "last_completed": "2024-08-15T00:00:00Z"
        },
        {
          "task_id": "task_002",
          "equipment": "irrigation system",
          "description": "Inspect and calibrate irrigation system",
          "frequency": "quarterly",
          "last_completed": "2024-07-15T00:00:00Z"
        }
      ]
    }
  }


  var userAccessControl={
    "user_access": {
      "users": [
        {
          "user_id": "user_001",
          "name": "John Doe",
          "role": "admin",
          "permissions": ["view", "edit", "control"]
        },
        {
          "user_id": "user_002",
          "name": "Jane Smith",
          "role": "operator",
          "permissions": ["view", "control"]
        }
      ]
    }
  }
;

var alertsHistory={
    "alerts_history": [
      {
        "alert_id": "alert_001",
        "type": "temperature",
        "message": "Temperature exceeded maximum threshold",
        "timestamp": "2024-09-05T12:05:00Z",
        "resolved": true,
        "resolution_details": "Adjusted heater settings"
      },
      {
        "alert_id": "alert_002",
        "type": "humidity",
        "message": "Humidity level dropped below minimum",
        "timestamp": "2024-09-05T12:10:00Z",
        "resolved": false,
        "resolution_details": ""
      }
    ]
  }
;


var waterQuality={
    "water_quality": {
      "timestamp": "2024-09-05T12:00:00Z",
      "ph_level": {
        "current": 6.8,
        "unit": "pH"
      },
      "temperature": {
        "current": 20.0,
        "unit": "Celsius"
      },
      "conductivity": {
        "current": 1.5,
        "unit": "dS/m"
      },
      "turbidity": {
        "current": 2.0,
        "unit": "NTU"
      }
    }
  }

var pestDisease={
    "pest_disease_monitoring": {
      "timestamp": "2024-09-05T12:00:00Z",
      "pests": [
        {
          "pest_id": "pest_001",
          "name": "Aphid",
          "location": "Vegetable Zone",
          "severity": "moderate",
          "last_observed": "2024-09-04T15:00:00Z"
        }
      ],
      "diseases": [
        {
          "disease_id": "disease_001",
          "name": "Powdery Mildew",
          "location": "Flower Zone",
          "severity": "severe",
          "last_observed": "2024-09-03T10:00:00Z"
        }
      ]
    }
  }
;


var greenhouseUsageStatistics={
    "usage_statistics": {
      "timestamp": "2024-09-05T12:00:00Z",
      "total_hours_operated": 1200,
      "hours_per_device": {
        "heaters": 300,
        "lights": 500,
        "fans": 400
      },
      "energy_efficiency": {
        "total_energy_used": 1500,  // kWh
        "energy_per_plant": 0.5,    // kWh per plant
        "unit": "kWh"
      }
    }
  }

var equipmentStatusMaintainance={
    "equipment_status": {
      "timestamp": "2024-09-05T12:00:00Z",
      "equipment": [
        {
          "equipment_id": "eq_001",
          "name": "Fan 1",
          "status": "operational",
          "last_maintenance": "2024-08-15T00:00:00Z",
          "next_due": "2024-09-15T00:00:00Z"
        },
        {
          "equipment_id": "eq_002",
          "name": "Heater 1",
          "status": "needs maintenance",
          "last_maintenance": "2024-07-15T00:00:00Z",
          "next_due": "2024-08-15T00:00:00Z"
        }
      ]
    }
  }
;


var systemLog={
    "system_logs": [
      {
        "log_id": "log_001",
        "timestamp": "2024-09-05T12:00:00Z",
        "action": "Heater activated",
        "details": "Heater 1 turned on to reach 23.0°C",
        "user_id": "system"
      },
      {
        "log_id": "log_002",
        "timestamp": "2024-09-05T11:55:00Z",
        "action": "Irrigation started",
        "details": "Irrigation system activated for 30 minutes",
        "user_id": "system"
      }
    ]
  }

var greenhouseFinancials={
    "financials": {
      "timestamp": "2024-09-05T12:00:00Z",
      "expenses": {
        "total": 1200.0,       // in USD
        "breakdown": {
          "energy": 500.0,
          "supplies": 300.0,
          "maintenance": 200.0,
          "other": 200.0
        }
      },
      "revenues": {
        "total": 2500.0,       // in USD
        "sources": {
          "sales": 2200.0,
          "grants": 300.0
        }
      },
      "profit": 1300.0        // in USD
    }
  }
 