import React from 'react';

export default function NewShiftRequest(props) {

  let shiftIndex = 0;
  let shiftOptions = [];

  shiftOptions.push(<option key="optionDefault" value="unselected">---------</option>)
  props.shifts.forEach(shift => {
    shiftOptions.push(
      <option key={"option" + shiftIndex} value={shiftIndex}>{shift.date} - {shift.time}</option>
    )

    shiftIndex++;
  });

  return (
    <div id="new-shift-request">
      <div id="new-shift-header">
        <h2>New Shift Transfer Request</h2>
      </div>
      <div id="new-shift-body">
        <p>Select one of your shifts below to open a new transfer request.</p>
        <select name="future shifts" id="shift-request-select">
          {shiftOptions}
        </select>
        <p>* <strong>Note:</strong> New shift transfer requests can only be created for shifts that are scheduled at least two days in advance *</p>
        <div id="new-shift-options">
          <button className="secondary-btn" id="new-shift-create-btn" key="createOption" onClick={props.validateRequest}>Create Request</button>
          <button className="secondary-btn" id="new-shift-cancel-btn" key="cancelOption" onClick={() => props.cancelRequest("view")}>Cancel Request</button>
        </div>
      </div>
    </div>
  )
}