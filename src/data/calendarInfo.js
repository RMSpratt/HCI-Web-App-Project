import {getShifts} from './defaultShifts';

//Constants to hold the specific day endings
const DAY_ND_END = [2,22];
const DAY_RD_END = [3,23];
const DAY_ST_END = [1,21,31]

//Constant to hold all of the month names for a year
const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 
                    'October', 'November', 'December'];

//Constant to hold all of the weekday identifiers
const WEEK_DAYS = ['Su', 'M', 'T', 'W', 'T', 'F', 'Sa'];


//Function to build the Calendar info array for the given month and year
function buildMonthTable(month, year) {

  //The number of days in the month passed for the given year
  let numDaysCurrMonth = new Date(year, month + 1, 0).getDate();
  let numDaysPrevMonth = new Date(year, month, 0).getDate();

  //The number of days needed from the previous month to prepend this month calendar for formatting
  let numPrevDaysNeeded;

  //Used to set the weekday identifier for each day of the month, initialized by the first day of the month
  let currentWeekday = new Date(year, month, 1).getDay();

  let monthlyShifts = {};
  
  //Form the date string for retrieving shift information for the month and year
  let monthShiftString = "";
  monthShiftString += month;
  monthShiftString += year;

  //The month information table to be returned
  let monthTable = {};
  monthTable.name = MONTH_NAMES[month];
  monthTable.month = month;
  monthTable.year = year;
  monthTable.days = [];

  //If shift data exists for the given month and year, retrieve the shifts for the employee
  if (getShifts(monthShiftString) !== null) {
    monthlyShifts = getShifts(monthShiftString);
  } 

  //Set the number of days needed from the previous month to the first weekday index of the current month
  //Ex. currentWeekday = 2 (Tuesday) means we need 2 days (Sunday and Monday) to start this calendar month
  numPrevDaysNeeded = currentWeekday;

  //Create day objects for the previous month's days
  for (let i = 0; i < numPrevDaysNeeded; i++) {

    let dayInfo = {};
    dayInfo.num = numDaysPrevMonth - i;
    dayInfo.wd = WEEK_DAYS[numPrevDaysNeeded - 1 - i];
    dayInfo.key = "prev" + i;

    //Insert the day object at the start of the calendar array
    monthTable.days.unshift(dayInfo);
  }


  //Build day info objects for every day of the month
  for (let i = 1; i <= numDaysCurrMonth; i++) {

    let dayInfo = {};
    dayInfo.num = i;
    dayInfo.wd = WEEK_DAYS[currentWeekday];
    dayInfo.key = "curr" + i;

    //If the employee has a shift scheduled for the given day, add it to the day's information
    if (monthlyShifts[i] != null) {
      dayInfo.shift = {};
      dayInfo.shift.time = monthlyShifts[i].time;
      dayInfo.shift.area = monthlyShifts[i].area;
    }
    
    else {
      dayInfo.shift = null;
    }

    monthTable.days.push(dayInfo);

    //Adjust the current weekday index
    currentWeekday < 6 ? currentWeekday++ : currentWeekday = 0;
  }

  return monthTable;
}

/* PUBLIC EXPORTED FUNCTIONS */

//Utility function to build a formatted date string using the passed month (number) and day
export function buildFormattedDate(monthIndex, day) {

  let monthName; 
  let dayName;
  let dateString;

  monthName = MONTH_NAMES[monthIndex];

  if (DAY_ND_END.includes(day)) {
    dayName = day + "nd";
  }
  
  else if (DAY_RD_END.includes(day)) {
    dayName = day + "rd";
  }

  else if (DAY_ST_END.includes(day)) {
    dayName = day + "st";
  }

  else {
    dayName = day + "th";
  }

  dateString = monthName + " " + dayName;

  return dateString;
}


export function getMonthInfo(employeeID, month, year) {

  //The table of information for the given month and year to return
  let monthInfoTable;

  //If the employee ID wasn't passed, the request for month info is unauthorized or invalid
  if (employeeID == null) {
    return null;
  }

  //If the month or year weren't provided, get the current month and year as a default
  if (month == null || year == null) {
    let dt = new Date();
    month = dt.getMonth();
    year = dt.getFullYear();
  }

  //Craft the table of information for the month to be returned
  monthInfoTable = buildMonthTable(month, year);

  return monthInfoTable;
}


/* Function: getDateFromCurrent
 * Description: This utility function is used to get the date a certain number of days before or after the current date.
*/ 
export function getDateFromGiven(startDate, direction, numDays) {

  let newDate = new Date();

  //If a parameter is missing, return null
  if (startDate === null || direction === null || numDays === null) {
    return null;
  }

  if (direction === "backwards") {
    newDate.setDate(startDate.getDate() - numDays);
  }

  else {
    newDate.setDate(startDate.getDate() + numDays);
  }

  return newDate;
}

export function getShortDateFormat(date) {

  let formattedDate = "";

  if (date === null) {
    return null;
  }

  formattedDate += date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
  formattedDate += "-"
  formattedDate += date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  formattedDate += "-"
  formattedDate += date.getFullYear();

  return formattedDate;
}

//Function to get the previous date or next date from the current date
export function getNeighbourDay(currentDate, direction) {

  let currentDay = currentDate.getDate();
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();

  let newDate;

  //Check if the desired day is the previous day
  if (direction === "previous") {

    //Check if this is the first day of the month
    if (currentDay === 1) {

      //If the current date is January 1st, set the day to December 31st of the previous year
      if (currentMonth === 0) {
        newDate = new Date(currentYear - 1, 11, 31);
      }

      //Else, set the current date to the last day of the previous month
      else {
        newDate = new Date(currentYear, currentMonth, 0);
      }
    }

    //Else, set the date to the previous day of the current month
    else {
      newDate = new Date(currentYear, currentMonth, currentDay - 1);
    }
  }

  //Else, get the following day's date
  else {

    //Get the last day of the current month
    let tempDate = new Date(currentYear, currentMonth+1, 0);
    let lastDay = tempDate.getDate();

    //Check if this is the last day of the month
    if (currentDay === lastDay) {

      //If the current date is December 31st, set the day to January 1st of the following year
      if (currentMonth === 11) {
        newDate = new Date(currentYear + 1, 0, 1);
      }

      //Else, set the current date to the first day of the next month
      else {
        newDate = new Date(currentYear, currentMonth + 1);
      }
    }

    //Else, set the date to the next day of the current month
    else {
      newDate = new Date(currentYear, currentMonth, currentDay + 1);
    }
  }

  return newDate;
}
