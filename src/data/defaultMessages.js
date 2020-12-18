import { getShortDateFormat, getDateFromGiven} from "./calendarInfo";

const DATE_TODAY = new Date();

//Open Shift Request Notice Dates
const OPEN_SHIFT_1_DATE = DATE_TODAY;
const OPEN_SHIFT_2_DATE = getDateFromGiven(DATE_TODAY, "backwards", 1);
const OPEN_SHIFT_3_DATE = getDateFromGiven(DATE_TODAY, "backwards", 5);

const CLOSED_SHIFT_DATE_1 = getDateFromGiven(DATE_TODAY, "backwards", 6);
const CLOSED_SHIFT_DATE_2 = getDateFromGiven(DATE_TODAY, "backwards", 5);
const CLOSED_SHIFT_DATE_3 = getDateFromGiven(DATE_TODAY, "backwards", 9);

const MESSAGE_DATE_1 = getDateFromGiven(DATE_TODAY, "backwards", 5);

const EMPLOYEE_MESSAGES = [
  {
    date: "12-18-2020",
    message: "Well, this is the end of the trial development period for the DWH Web Utility and Communication Tool. Thank you for being patient with us as we worked out some of the kinks, and we hope to have your support going forward.",
    name: "Reed",
    sender: "adminRX@dwh.com",
    subject: "End of Initial Development Trial",
    time: "8:33pm",
    type: "notice"
  },
  {
    date: "12-11-2020",
    message: "Hey X, this is a forewarning, we're getting 26 palettes tomorrow. Come prepared and preferably caffeinated!",
    name: "Meagan",
    sender: "meaganX@dwh.com",
    subject: "Be Prepared!",
    time: "7:59pm",
    type: "regular"
  },
  {
    date: "12-06-2020",
    message: "Hi Matthew, thanks for taking my shift the other day, it was a huge help!",
    name: null,
    sender: null,
    subject: "Thanks!",
    time: "4:30pm",
    type: "sent"
  },
  {
    date: "12-03-2020",
    message: "Hey X, I left in a hurry yesterday and left the compactor keys in the lounge. They might still be there when you go in tomorrow morning if you can't find them.",
    name: "James",
    sender: "jamesX@dwh.com",
    subject: "Compactor Keys",
    time: "11:27pm",
    type: "regular"
  },
  {
    date: "12-02-2020",
    message: "Seasons Greetings everyone! This is just a reminder that our store is extending its hours for the holiday season. We will now be open until 10:00pm on weekdays and Saturday.",
    name: "Crystal",
    sender: "crystalX@dwh.com",
    subject: "Holiday Hours",
    time: "1:21pm",
    type: "notice"
  },
    {
    date: "12-02-2020",
    message: "Seasons Greetings everyone! This is just a reminder that our store is extending its hours for the holiday season. We will now be open until 10:00pm on weekdays and Saturday.",
    name: "Crystal",
    sender: "crystalX@dwh.com",
    subject: "Holiday Hours",
    time: "1:21pm",
    type: "notice"
  },
  {
    date: "11-28-2020",
    message: "Hello DWH Guelph, this is just a test notice to see if the website's notice system is functioning correctly.",
    name: "Reed",
    sender: "adminRX@dwh.com",
    subject: "Test Message",
    time: "9:32am",
    type: "notice"
  }
]

const MANAGEMENT_MESSAGES = [
  {
    date: getShortDateFormat(OPEN_SHIFT_1_DATE),
    message: "This is an automated message to inform you that a shift request has been opened by: Kathy X at 3:32pm today. This message cannot be replied to.",
    name: "Shift Manager",
    sender: "shiftManager@dwh.com",
    subject: "NEW OPEN SHIFT REQUEST",
    time: "3:34pm",
    type: "notice"
  },
  {
    date: getShortDateFormat(OPEN_SHIFT_2_DATE),
    message: "This is an automated message to inform you that a shift request has been opened by: Ben X at 12:25pm today. This message cannot be replied to.",
    name: "Shift Manager",
    sender: "shiftManager@dwh.com",
    subject: "NEW OPEN SHIFT REQUEST",
    time: "12:26pm",
    type: "notice"
  },
  {
    date: getShortDateFormat(CLOSED_SHIFT_DATE_2),
    message: "This is an automated message to inform you that a shift request has been opened by: Kathryn X at 6:40pm today. This message cannot be replied to.",
    name: "Shift Manager",
    sender: "shiftManager@dwh.com",
    subject: "NEW OPEN SHIFT REQUEST",
    time: "6:42pm",
    type: "notice"
  },
  {
    date: getShortDateFormat(MESSAGE_DATE_1),
    message: "Hi DWH Guelph, this is just a reminder that your store should be preparing for inventory season. Please have your store employees review the inventory marking procedures. Thank you! - Stacey",
    name: "Stacey",
    sender: "staceyX@dwhcorp.com",
    subject: "Inventory Season",
    time: "10:10am",
    type: "regular"
  },
  {
    date: getShortDateFormat(OPEN_SHIFT_3_DATE),
    message: "This is an automated message to inform you that a shift request has been opened by: Stephanie X at 9:09am today. This message cannot be replied to.",
    name: "Shift Manager",
    sender: "shiftManager@dwh.com",
    subject: "NEW OPEN SHIFT REQUEST",
    time: "9:11am",
    type: "notice"
  },
  {
    date: getShortDateFormat(CLOSED_SHIFT_DATE_1),
    message: "This is an automated message to inform you that a shift request has been opened by: Sebastian X at 12:21pm today. This message cannot be replied to.",
    name: "Shift Manager",
    sender: "shiftManager@dwh.com",
    subject: "NEW OPEN SHIFT REQUEST",
    time: "12:23pm",
    type: "notice"
  },
  {
    date: getShortDateFormat(CLOSED_SHIFT_DATE_3),
    message: "This is an automated message to inform you that a shift request has been opened by: Fatima X at 1:14pm today. This message cannot be replied to.",
    name: "Shift Manager",
    sender: "shiftManager@dwh.com",
    subject: "NEW OPEN SHIFT REQUEST",
    time: "1:19pm",
    type: "notice"
  },
  {
    date: "12-05-2020",
    message: "Hi X, I was just wondering if it's too late to book off Christmas Eve and Boxing Day? I was planning on heading back home for the weekend to spend a few days with family.",
    name: "Meagan",
    sender: "meaganX@dwh.com",
    subject: "Booking off Time for Christmas",
    time: "10:10am",
    type: "regular"
  },
  {
    date: "12-02-2020",
    message: "Hi Sebastian, this is just a reminder that you haven't yet watched November's monthly video on warehouse safety reminders as we approach the Holiday rush. I know you've seen it at least three times now, but it is mandatory! Thanks.",
    name: null,
    sender: null,
    subject: "Warehouse Safety Reminder",
    time: "8:32pm",
    type: "sent"
  },
  {
    date: "12-02-2020",
    message: "Seasons Greetings everyone!\n\nThis is just a reminder that our store is extending its hours for the holiday season. We will now be open until 10:00pm on weekdays and Saturday.",
    name: "Crystal",
    sender: "crystalX@dwh.com",
    subject: "Holiday Hours",
    time: "1:21pm",
    type: "notice"
  },
  {
    date: "11-30-2020",
    message: "Hey X, this is just a heads up about the major spill in Zone 3, there were no injuries although one customer did slip and fall knocking down a display. I've gone ahead and created the incident report, but I'll need you to sign off on them when you can. Thanks.",
    name: "Karen",
    sender: "karenX@dwh.com",
    subject: "Incident Report",
    time: "7:16pm",
    type: "regular"
  },
  {
    date: "11-28-2020",
    message: "Hi. Let me know if you get this message, I want to make sure that I'm using this thing properly...",
    name: "Lynda",
    sender: "lyndaX@dwh.com",
    subject: "Message Received?",
    time: "7:16pm",
    type: "notice"
  },
  {
    date: "11-28-2020",
    message: "Hello DWH Guelph, this is just a test notice to see if the website's notice system is functioning correctly.",
    name: "Reed",
    sender: "adminRX@dwh.com",
    subject: "Test Message",
    time: "9:32am",
    type: "notice"
  }
];

function getFilteredMessages(userType, messageType) {

  //Set the list of messages to filter based on the user type
  let messageList = userType === "employee" ? EMPLOYEE_MESSAGES : MANAGEMENT_MESSAGES;

  //The array of filtered messages to return
  let filteredMessages = [];

  //Retrieve all of the messages matching the given type
  for (let i = 0; i < messageList.length; i++) {

    if (messageList[i].type === messageType) {
      filteredMessages.push(messageList[i]);
    }
  }

  return filteredMessages;
}

function getReceivedMessages(userType) {

  //Set the list of messages to filter based on the user type
  let messageList;

  //The array of filtered messages to return
  let receivedMessages = [];
  
  //Retrieve the default employee messages
  if (userType === "employee") {
    messageList = EMPLOYEE_MESSAGES;
  } 
  
  //Retrieve the default management messages
  else { 
    messageList = MANAGEMENT_MESSAGES;
  }

  //Retrieve all of the messages matching the given type
  for (let i = 0; i < messageList.length; i++) {

    if (messageList[i].type !== "sent") {
      receivedMessages.push(messageList[i]);
    }
  }

  return receivedMessages;
}

/** EXPORT FUNCTIONS **/

export function getEmployeeMessages(filter="none") {

  if (filter !== "none") {
    return getFilteredMessages("employee", filter);
  }

  else {
    return getReceivedMessages("employee");
  }
}

export function getManagementMessages(filter="none") {
  
  if (filter !== "none") {
    return getFilteredMessages("management", filter);
  }

  else {
    return getReceivedMessages("management");
  }
}
