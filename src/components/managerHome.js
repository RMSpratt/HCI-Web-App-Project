import React from 'react';
import NoticePanel from './noticePanel';
import Schedule from './schedule';
import {getNotices} from '../data/defaultNotices';
import {getSchedule} from '../data/defaultSchedules';
import {getNeighbourDay} from '../data/calendarInfo';

const NUM_SCHEDULES = 1;

class ManagerHome extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      notices: getNotices(),
      scheduleDate: new Date(),
      scheduleInfo: getSchedule(0),
      scheduleIndex: 0
    }

    this.changeScheduleDate = this.changeScheduleDate.bind(this);
  }


  /* Function: changeScheduleDate
   * Description: This callback function is used to change the schedule displayed on the Manager Homepage when the user navigates between
   *              different calendar days. 
  */ 
  changeScheduleDate(action) {

    let newDate = getNeighbourDay(this.state.scheduleDate, action);
    let newSchedule;
    let newScheduleIndex;

    //Decrement the schedule index when navigating backwards through days
    if (action === "previous") {
      newScheduleIndex = this.state.scheduleIndex === 0 ? NUM_SCHEDULES : this.state.scheduleIndex - 1;
    }

    //Increment the schedule index when navigating forwards through days
    else {
      newScheduleIndex = this.state.scheduleIndex === NUM_SCHEDULES ? 0 : this.state.scheduleIndex + 1;
    }
    
    //Get the new schedule for the schedule index
    newSchedule = getSchedule(newScheduleIndex);

    this.setState({scheduleDate: newDate, scheduleInfo: newSchedule, scheduleIndex: newScheduleIndex});
  }

  render() {
    return(
      <main>
        <Schedule changeDate={this.changeScheduleDate} scheduleInfo={this.state.scheduleInfo} scheduleDate={this.state.scheduleDate}/>
        <NoticePanel notices={this.state.notices}/>
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

export default ManagerHome;