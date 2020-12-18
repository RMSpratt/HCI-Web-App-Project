import React from 'react';
import Calendar from './calendar';
import NoticePanel from './noticePanel';
import {getMonthInfo} from '../data/calendarInfo';
import {getNotices} from '../data/defaultNotices';


class EmployeeHome extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      calendarInfo: getMonthInfo(100),
      notices: getNotices()
    }

    this.updateCalendarInfo = this.updateCalendarInfo.bind(this);
  }


  //Event callback function to update the Calendar information to display
  updateCalendarInfo(action) {

    let currentMonth = this.state.calendarInfo.month;
    let currentYear = this.state.calendarInfo.year;
    let newMonth;
    let newYear;

    //Set the month and year to get the previous month's information
    if (action === "previous") {

      //Decrement the month if we're in a month above January
      if (currentMonth > 0) {
        newMonth = currentMonth - 1;
        newYear = currentYear;
      }

      //Else, shift the month and year
      else {
        newMonth = 11;
        newYear = currentYear - 1;
      }
    }

    //Set the month and year to get the next month's information
    else {

      //Increment the month if we're in a month before December
      if (currentMonth < 11) {
        newMonth = currentMonth + 1;
        newYear = currentYear;
      }

      //Else, shift the month and year
      else {
        newMonth = 0;
        newYear = currentYear + 1;
      }
    }

    let newMonthInfo = getMonthInfo(100, newMonth, newYear);
    this.setState({calendarInfo: newMonthInfo});
  }

  render() {
    return (
      <main>
        <Calendar monthInfo={this.state.calendarInfo} changeDate = {this.updateCalendarInfo}/>
        <NoticePanel notices={this.state.notices} />
        <div id="additional-option-panel">
          <div id="additional-option-header">
            <h2>Additional Options</h2>
          </div>
          <div id="additional-option-body">
            <button className="secondary-btn" onClick={() => this.props.navRequest("shift-manager")}>Shift Manager</button>
            <button className="secondary-btn disabled" disabled={true}>Scheduling</button>
            <button className="secondary-btn disabled" disabled={true}>Form Search</button>
          </div>
        </div>
      </main>
    )
  }
}

export default EmployeeHome;