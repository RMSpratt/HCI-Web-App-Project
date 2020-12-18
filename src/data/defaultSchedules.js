//{name: "", start: "", end: "", break: "", lunch: ""}
//Organized in a repeating array so that they repeat every x amount of days (illusion of existing for every day)
const DAY_SCHEDULES = [
  
  //Schedule 1
  {
    "Cash": 
    [
      {name: "Emily", start: "9:00am", end: "5:30pm", break: "11:00am - 11:10am", lunch: "1:45pm - 2:30pm"},
      {name: "Fatima", start: "9:30am", end: "2:00pm", break: "11:45am - 12:00pm", lunch: null},
      {name: "Shelly", start: "1:00pm", end: "9:30pm", break: "7:20pm - 7:30pm", lunch: "4:35pm - 5:15pm"},
      {name: "Matthew", start: "3:30pm", end: "9:30pm", break: "8:00pm - 8:10pm", lunch: "6:00pm - 6:30pm"}
    ],

    "Zone 1": 
    [
      {name: "Ingrid", start: "9:00am", end: "5:30pm", break: "3:30pm - 3:40pm", lunch: "12:45am - 1:30pm"},
      {name: "Gina", start: "10:30am", end: "4:00pm", break: "12:30pm - 12:40pm", lunch: "1:30pm - 2:00pm"},
      {name: "Nicole", start: "3:00pm", end: "9:30pm", break: "7:50pm - 8:00pm", lunch: "5:30pm - 6:00pm"},
      {name: "Stephanie", start: "5:00pm", end: "9:30pm", break: "7:30pm - 7:40pm", lunch: null}  
    ],

    "Zone 2":
    [
      {name: "Sara", start: "9:00am", end: "2:30pm", break: "11:00am - 11:15am", lunch: null},
      {name: "Lynda", start: "11:00am", end: "7:30pm", break: "5:30pm - 5:40pm", lunch: "2:45pm - 3:30pm"},
      {name: "Karen", start: "5:00pm", end: "9:30pm", break: "7:00pm - 7:15pm", lunch: null},
    ],

    "Zone 3":
    [
      {name: "Warren", start: "9:00am", end: "3:30pm", break: "11:00am - 11:15am", lunch: "1:30pm - 2:00pm"},
      {name: "Meagan", start: "10:00am", end: "6:30pm", break: "4:00pm - 4:10pm", lunch: "12:45pm - 1:30pm"},
      {name: "Victoria", start: "2:00pm", end: "9:30pm", break: "7:50pm - 8:00pm", lunch: "5:45pm - 6:30pm"},
      {name: "Ben", start: "5:00pm", end: "9:30pm", break: "7:30pm - 7:45pm", lunch: null}
    ],

    "Warehouse": 
    [
      {name: "Clayton", start: "8:00am", end: "2:30pm", break: "9:50am - 10:00am", lunch: "11:30am - 12:00pm"},
      {name: "James", start: "8:00am", end: "4:30pm", break: "10:00am - 10:10am", lunch: "12:45am - 1:30pm"},
      {name: "Alex", start: "10:00am", end: "5:30pm", break: "4:00pm - 4:10pm", lunch: "1:30pm - 2:00pm"},
      {name: "Sebastian", start: "4:00pm", end: "9:30pm", break: "6:30pm - 6:45pm", lunch: null}
    ],

    "Managers on Duty":
    [
      {name: "Karen X.", start: "8:00am", end: "5:00pm", break: null, lunch: "12:30pm - 1:30pm"},
      {name: "Shelby", start: "12:30pm", end: "9:30pm", break: null, lunch: "5:00pm - 6:00pm"},
    ]
  },

  //Schedule 2
  {
    "Cash": 
    [
      {name: "Patricia", start: "9:00am", end: "2:30pm", break: "12:30pm - 12:45pm", lunch: null},
      {name: "Kathryn", start: "9:30am", end: "4:00pm", break: "3:00pm - 3:10pm", lunch: "12:00pm - 12:45pm"},
      {name: "Shelly", start: "11:00am", end: "7:30pm", break: "5:00pm - 5:15pm", lunch: "2:00pm - 2:45pm"},
      {name: "Kathryn", start: "12:00pm", end: "6:30pm", break: "1:50pm - 2:00pm", lunch: "3:30pm - 4:00pm"},
      {name: "Jack", start: "5:00pm", end: "9:30pm", break: "6:30pm - 6:45pm", lunch: null}
    ],

    "Zone 1": 
    [
      {name: "Ingrid", start: "9:00am", end: "5:30pm", break: "3:20pm - 3:30pm", lunch: "12:30pm - 1:15pm"},
      {name: "Matthew", start: "10:00am", end: "2:30pm", break: "12:00pm - 12:15pm", lunch: null},
      {name: "Kathy", start: "1:00pm", end: "7:30pm", break: "6:20pm - 6:30pm", lunch: "4:00pm - 4:30pm"},
      {name: "Stephanie", start: "5:00pm", end: "9:30pm", break: "7:15pm - 7:30pm", lunch: null}  
    ],

    "Zone 2":
    [
      {name: "Sara", start: "9:00am", end: "1:30pm", break: "11:00am - 11:15am", lunch: null},
      {name: "Lynda", start: "1:00pm", end: "9:30pm", break: "7:30pm - 7:45pm", lunch: "4:45pm - 5:30pm"},
      {name: "Nicole", start: "2:00pm", end: "8:30pm", break: "4:20pm - 4:30pm", lunch: "6:00pm - 6:30pm"},
    ],

    "Zone 3":
    [
      {name: "Hayden", start: "9:00am", end: "2:30pm", break: "11:45am - 12:00pm", lunch: null},
      {name: "Madeline", start: "9:30am", end: "6:00pm", break: "4:20pm - 4:30pm", lunch: "12:45pm - 1:30pm"},
      {name: "Victoria", start: "1:00pm", end: "9:30pm", break: "8:00pm - 8:10pm", lunch: "5:00pm - 5:45pm"},
      {name: "Ben", start: "5:00pm", end: "9:30pm", break: "7:30pm - 7:45pm", lunch: null}
    ],

    "Warehouse": 
    [
      {name: "Clayton", start: "8:00am", end: "2:30pm", break: "9:50am - 10:00am", lunch: "11:30am - 12:00pm"},
      {name: "James", start: "8:00am", end: "4:30pm", break: "10:00am - 10:10am", lunch: "12:45am - 1:30pm"},
      {name: "Reed", start: "11:00am", end: "4:30pm", break: "1:15pm - 1:30pm", lunch: null},
      {name: "Sebastian", start: "4:00pm", end: "9:30pm", break: "6:15pm - 6:30pm", lunch: null}
    ],

    "Managers on Duty":
    [
      {name: "Janice", start: "8:00am", end: "5:00pm", break: null, lunch: "1:00pm - 2:00pm"},
      {name: "Shelby", start: "12:30pm", end: "9:30pm", break: null, lunch: "5:00pm - 6:00pm"},
    ]
  }
]


export function getSchedule(index) {

  if (index < 0) {
    index = DAY_SCHEDULES.length - 1;
  }

  else if (index > DAY_SCHEDULES.length - 1) {
    index = 0;
  }
  
  return DAY_SCHEDULES[index];
}