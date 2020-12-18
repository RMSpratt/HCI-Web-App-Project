import React from 'react';

export default function Calendar(props) {

  let monthInfo = props.monthInfo;
  let dayElements = [];

  //Create a div for each day of the month
  monthInfo.days.forEach(day => {

    let dayDiv;
    let dayShift;
    
    //If there is a shift for the current day, create a display for it
    if (day.shift != null) {
      dayShift = <div className="shift" key={"shift" + day.num}>
        <p>{day.shift.time}</p>
        <p>{day.shift.area}</p>
      </div>;
    }
    
    //Create the Day Div
    dayDiv = <div className="day" key={day.key}>
      <p className="date" key={"num" + day.num}>{day.num}</p>
      <p className="weekday" key={"wd" + day.num}>{day.wd}</p>
      {dayShift}
    </div>;

    dayElements.push(dayDiv);
  });

  let calendarDiv = React.createElement('div', {id: "calendar-body"}, dayElements);
  
  return (
    <div id="calendar-panel">
    <div className="panel-header">
      <div className="left">
        <button className="tertiary-btn" onClick={() => props.changeDate("previous")}><i className="fas fa-chevron-left" role="img" aria-label="View previous month"/></button>
      </div>
      <h2> {props.monthInfo.name} {props.monthInfo.year} </h2>
      <div className="right">
        <button className="tertiary-btn" onClick={() => props.changeDate("next")}><i className="fas fa-chevron-right" role="img" aria-label="View next month"/></button>
      </div>
    </div>
    {calendarDiv}
  </div>
  )
}
