const SHIFT_ARRAY = [
  {date: "12-01-2020", time: "11:00 - 7:00", area: "Zone 1", month: 11, day: 1},
  {date: "12-05-2020", time: "5:00 - 9:30", area: "Cash", month: 11, day: 5},
  {date: "12-06-2020", time: "1:00 - 9:30", area: "Zone 1", month: 11, day: 6},
  {date: "12-08-2020", time: "5:00 - 9:30", area: "Zone 1", month: 11, day: 8},
  {date: "12-10-2020", time: "5:00 - 9:30", area: "Cash", month: 11, day: 10},
  {date: "12-13-2020", time: "12:00 - 6:30", area: "Zone 1", month: 11, day: 13},
  {date: "12-15-2020", time: "5:00 - 9:00", area: "Cash", month: 11, day: 15},
  {date: "12-19-2020", time: "9:30 - 2:00", area: "Cash", month: 11, day: 19},
  {date: "12-24-2020", time: "1:00 - 9:30", area: "Zone 1", month: 11, day: 24},
  {date: "12-27-2020", time: "10:00 - 4:30", area: "Zone 1", month: 11, day: 27},
  {date: "12-31-2021", time: "9:30 - 5:30", area: "Cash", month: 11, day: 31},
  {date: "01-02-2021", time: "9:30 - 5:30", area: "Cash", month: 0, day: 2},
  {date: "01-03-2021", time: "3:00 - 9:30", area: "Zone 1", month: 0, day: 3},
  {date: "01-05-2021", time: "5:00 - 9:30", area: "Cash", month: 0, day: 5},
  {date: "01-07-2021", time: "5:00 - 9:30", area: "Zone 1", month: 0, day: 7},
  {date: "01-10-2021", time: "11:00 - 6:30", area: "Cash", month: 0, day: 10}
]


const SHIFT_DATA = {
  "112020": 
  {
    shifts: {
      1: {time: "11:00 - 7:00", area: "Zone 1"},
      5: {time: "5:00 - 9:30", area: "Cash"},
      6: {time: "1:00 - 9:30", area: "Zone 1"},
      8: {time: "5:00 - 9:30", area: "Zone 1"},
      10: {time: "5:00 - 9:30", area: "Cash"},
      13: {time: "12:00 - 6:30", area: "Zone 1"},
      15: {time: "5:00 - 9:00", area: "Cash"},
      19: {time: "9:30 - 2:00", area: "Cash"},
      24: {time: "1:00 - 9:30", area: "Zone 1"},
      27: {time: "10:00 - 4:30", area: "Zone 1"},
    }
  },
  "02021": 
  {
    shifts: {
      2: {time: "9:30 - 5:30", area: "Cash"},
      3: {time: "3:00 - 9:30", area: "Zone 1"},
      5: {time: "5:00 - 9:30", area: "Cash"},
      7: {time: "5:00 - 9:30", area: "Zone 1"},
      10: {time: "11:00 - 6:30", area: "Cash"},
    }
  }
}


/* Function: getShifts
 * Description: Function to get a set of shifts for the given month and year, formatted as a string for access.
*/ 
export function getShifts(dateString) {

  if (SHIFT_DATA[dateString] !== undefined) {
    return SHIFT_DATA[dateString].shifts;
  }

  return null;
}

/* Function: getShiftArray
 * Description: Function to get all of the shifts available.
*/ 
export function getShiftArray() {

  let currentDate = new Date();
  let futureShifts = [];

  //Only add shifts that are at least two days ahead of the current date
  SHIFT_ARRAY.forEach(shift => {

    if (shift.month === currentDate.getMonth()) {

      if (shift.day >= currentDate.getDate() + 2) {    
        futureShifts.push(shift);
      }
    }
    
    else {
      futureShifts.push(shift);
    }
  });
  
  return futureShifts;
}