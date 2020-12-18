import React from 'react';
import {buildFormattedDate} from '../data/calendarInfo';

function buildScheduleBody(scheduleDetails) {
  
  let schedule = [];
  let tableIndex = 0;

  //Iterate through every area of the store and form its schedule table
  for (let area of Object.keys(scheduleDetails)) {

    let areaTable;

    let areaName = <p key={"area" + tableIndex}>
      {area}
    </p>;

    //Get all of the employees for the area
    let employees = scheduleDetails[area];

    let tableHead = <tr>
      <th>Employee Name</th>
      <th>Start</th>
      <th>End</th>
      <th>Break</th>
      <th>Lunch</th>
    </tr>;

    let tableBody = [];

    //Add all of the employees for the zone to the table
    for (let i = 0; i < employees.length; i++) {

      let tableRow = <tr key={"row" + tableIndex + "-" + i}>
        <td>{employees[i].name}</td>
        <td>{employees[i].start}</td>
        <td>{employees[i].end}</td>
        <td>{employees[i].break}</td>
        <td>{employees[i].lunch}</td>
      </tr>;

      tableBody.push(tableRow);
    }

    areaTable = <table className="schedule-table" key={"table" + tableIndex}>
      <thead>{tableHead}</thead>
      <tbody>{tableBody}</tbody>
    </table>;

    schedule.push(areaName, areaTable);

    //Increment the table index
    tableIndex++;
  }

  return schedule;
}

export default function Schedule(props) {

  let scheduleDetails = buildScheduleBody(props.scheduleInfo);
  let scheduleDate = buildFormattedDate(props.scheduleDate.getMonth(), props.scheduleDate.getDate());

  return (
    <div id="schedule">
      <div className="panel-header">
        <div className="left">
          <button onClick={() => props.changeDate("previous")}><i className="fas fa-chevron-left" role="img" aria-label="View previous schedule"/></button>
        </div>
        <h2>{scheduleDate}</h2>
        <div className="right">
          <button onClick={() => props.changeDate("next")}><i className="fas fa-chevron-right" role="img" aria-label="View next schedule"/></button>
        </div>
      </div>
      <div id="schedule-body">
        <h3>Daily Schedule</h3>
        {scheduleDetails}
      </div>
    </div>
  )
}