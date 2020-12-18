const NOTICES = [
  {
    subject: "End of Development",
    message: "Well, this is the end of the trial development period for the DWH Web Utility and Communication Tool. Thank you for being patient with us as we worked out some of the kinks, and we hope to have your support going forward.",
    sender: "adminRX@dwh.com",
    date: "12-18-2020",
    time: "8:33pm"
  },
  {
    subject: "Holiday Hours",
    message: "Seasons Greetings everyone! This is just a reminder that our store is extending its hours for the holiday season. We will now be open until 10:00pm on weekdays and Saturday.",
    sender: "crystalX@dwh.com",
    date: "12-02-2020",
    time: "1:21pm"
  },
  {
    subject: "Test Message",
    message: "Hello DWH Guelph, this is just a test notice to see if the website's notice system is functioning correctly.",
    sender: "adminRX@dwh.com",
    date: "11-28-2020",
    time: "9:32am"
  },
]

export function getNotices() {
  return NOTICES;
}
