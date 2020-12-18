import { buildFormattedDate, getDateFromGiven} from "./calendarInfo";

//Dates to use for populating some open and closed shift requests
const DATE_TODAY = new Date();

const OPEN_SHIFT_DATE_1 = getDateFromGiven(DATE_TODAY, "forwards", 1);
const OPEN_SHIFT_DATE_2 = getDateFromGiven(DATE_TODAY, "forwards", 2);
const OPEN_SHIFT_DATE_3 = getDateFromGiven(DATE_TODAY, "forwards", 5);

const CLOSED_SHIFT_DATE_1 = getDateFromGiven(DATE_TODAY, "backwards", 1);
const CLOSED_SHIFT_DATE_2 = getDateFromGiven(DATE_TODAY, "backwards", 3);
const CLOSED_SHIFT_DATE_3 = getDateFromGiven(DATE_TODAY, "backwards", 7);

let CLOSED_REQUESTS = [
  {
    date: null,
    shift: "Warehouse 8:30am - 4:00pm",
    requestor: "Clayton",
    acceptor: "Sebastian",
    status: "Approved"
  },
  {
    date: null,
    shift: "Zone 2 4:00pm - 9:30pm",
    requestor: "Kathryn",
    acceptor: "Vacant",
    status: "Closed - No Acceptor"
  },
  {
    date: null,
    shift: "Cash 9:30am - 1:00pm",
    requestor: "Fatima",
    acceptor: "Vacant",
    status: "Closed - No Acceptor"
  }
];

let OPEN_REQUESTS = [
  {
    date: null,
    shift: "Zone 1, 9:30am - 2:00pm",
    requestor: "Stephanie",
    acceptor: "Vacant",
    status: "Open"
  },
  {
    date: null,
    shift: "Zone 3, 3:00pm - 9:30pm",
    requestor: "Ben",
    acceptor: "Hayden",
    status: "Pending Approval"
  },
  {
    date: null,
    shift: "Zone 1, 5:00pm - 9:30pm",
    requestor: "Kathy",
    acceptor: "Vacant",
    status: "Open"
  }
];


//Export function to get the placeholder data for closed shift transfer requests
export function getClosedRequests() {
  CLOSED_REQUESTS[0].date = buildFormattedDate(CLOSED_SHIFT_DATE_1.getMonth(), CLOSED_SHIFT_DATE_1.getDate());
  CLOSED_REQUESTS[1].date = buildFormattedDate(CLOSED_SHIFT_DATE_2.getMonth(), CLOSED_SHIFT_DATE_2.getDate());
  CLOSED_REQUESTS[2].date = buildFormattedDate(CLOSED_SHIFT_DATE_3.getMonth(), CLOSED_SHIFT_DATE_3.getDate());

  return CLOSED_REQUESTS;
}


//Export function to get the placeholder data for open shift transfer requests 
export function getOpenRequests() {
  OPEN_REQUESTS[0].date = buildFormattedDate(OPEN_SHIFT_DATE_1.getMonth(), OPEN_SHIFT_DATE_1.getDate());
  OPEN_REQUESTS[1].date = buildFormattedDate(OPEN_SHIFT_DATE_2.getMonth(), OPEN_SHIFT_DATE_2.getDate());
  OPEN_REQUESTS[2].date = buildFormattedDate(OPEN_SHIFT_DATE_3.getMonth(), OPEN_SHIFT_DATE_3.getDate());
  
  return OPEN_REQUESTS;
}


/* Name: updateShiftRequest
 * Description: This is a mock function to 'update' an open shift request's status based on some user action.
 *              Since there is no data persistence in this website, this will only check if the shift to update exists.
 * 
 * Parameter: requestType - The type of change to make to the shift
 * Parameter: shiftIndex - The index of the shift to update
 * Return: requestSuccessful
*/ 
export function updateShiftRequest(requestType, shiftIndex) {

  let requestSuccessful;

  //If the shift to update is valid, process the update request
  if (shiftIndex < OPEN_REQUESTS.length) {

    switch(requestType) {

      case "accept":
      case "approve":
      case "close":
      case "reject":
        requestSuccessful = true;
        break;
  
      default:
        requestSuccessful = false;
        break;
    }
  }

  else {
    requestSuccessful = false;
  }

  return requestSuccessful;
}