import React from 'react';

export default function ClosedShift(props) {

  let shiftDetails = props.shiftDetails;
  let shiftDate = shiftDetails.date;
  let shiftElements = [];

  //Build the details of the shift to be displayed
  for (let detail of Object.keys(props.shiftDetails)) {

    //Disregard the date attribute
    if (detail !== "date") {
      shiftElements.push(
        <tr key={"row" + shiftElements.length}>
          <th key={"heading" + shiftElements.length}>{detail}</th>
          <td key={"value" + shiftElements.length}>{props.shiftDetails[detail]}</td>
        </tr>
      );
    }
  }

  return (
    <div className={"shift condensed closed"}>
      <div className="header">
        <h3>{shiftDate}</h3>
      </div>
      <table className="shift-details">
        <tbody>
          {shiftElements}
        </tbody>
      </table>
    </div>
  );
}