import React from 'react';
import { updateShiftRequest } from '../../data/defaultShiftRequests';

class ExpandedShift extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      view: "default"
    }
  }

  //Function to build all of the specific details about the shift as paragraph elements
  buildShiftDetails() {

    let shiftDetails = [];

    //Build the details of the shift to be displayed
    for (let detail of Object.keys(this.props.shiftDetails)) {

      //Disregard the date attribute
      if (detail !== "date") {
        shiftDetails.push(
          <tr key={"row" + shiftDetails.length}>
            <th key={"heading" + shiftDetails.length}>{detail}</th>
            <td key={"value" + shiftDetails.length}>{this.props.shiftDetails[detail]}</td>
          </tr>
        );
      }
    }

    return (
      <table className="shift-details">
        <tbody>
          {shiftDetails}
        </tbody>
      </table>
    );
  }

  //Function to build the shift to be displayed in its entirety based on its current viewing mode
  buildShiftView() {

    //Variables for the specific components of the shift view
    let shiftDetails;
    let shiftMessage = null;
    let shiftInput = null;
    let shiftOptions;

    //Get the specific details for the shift
    shiftDetails = this.buildShiftDetails();

    //Build the 'accept' state view for the shift
    if (this.state.view === "accept") {
      shiftMessage = <p>Are you sure you want to accept this shift?<br/>Please ensure that you are elgible and available to work this shift.</p>;
      
      shiftOptions = <div className="shift-options">
        <button onClick={() => this.setViewMode("accepted")}>Confirm Accept</button>
        <button onClick={() => this.setViewMode("default")}>Cancel</button>
      </div>;
    }

    //Build the 'accepted' state view for the shift
    else if (this.state.view === "accepted") {
      shiftMessage = <p>Your request to accept this shift has been received.<br/>You will be notified if management approves your acceptance.</p>

      shiftOptions = <div className="shift-options">
        <button onClick={() => this.props.collapseShift()}>OK</button>
      </div>
    }
    
    //Build the 'approve' state view for the shift
    else if (this.state.view === "approve") {
      shiftMessage = <p>The shift transfer request will be set to 'Approved' and closed.</p>;

      shiftOptions = <div className="shift-options">
        <button onClick={() => this.sendShiftRequest("approve")}>Confirm Approve</button>
        <button onClick={() => this.setViewMode("default")}>Cancel</button>
      </div>;
    }

    //Build the 'approved' state view for the shift
    else if (this.state.view === "approved") {
      shiftMessage = <p>The shfit transfer request has been approved.<br/>The requester will be notified.</p>

      shiftOptions = <div className="shift-options">
        <button onClick={() => this.props.collapseShift()}>OK</button>
      </div>
    }

    //Build the 'close' state view for the shift
    else if (this.state.view === "close") {
      shiftMessage = <p>The shift transfer request will be closed.<br/>Please provide an optional concise reason below.</p>;

      shiftInput = <div className="shift-reason">
        <label htmlFor="shiftReasonInput">Reason:</label>
        <input id="shiftReasonInput" type="text"></input>
      </div>

      shiftOptions = <div className="shift-options">
        <button onClick={() => this.sendShiftRequest("close")}>Confirm Close</button>
        <button onClick={() => this.setViewMode("default")}>Cancel</button>
      </div>;
    }

    //Build the 'closed' state view for the shift
    else if (this.state.view === "closed") {
      shiftMessage = <p>The shift transfer request has been closed.<br/>The requester will be notified.</p>

      shiftOptions = <div className="shift-options">
        <button onClick={() => this.props.collapseShift()}>OK</button>
      </div>
    }

    //Build the 'reject' state view for the shift
    else if (this.state.view === "reject") {
      shiftMessage = <p>The shift transfer request will be set back to 'Open'.<br/>Please provide an optional concise reason below.</p>;

      shiftInput = <div className="shift-reason">
        <label htmlFor="shiftReasonInput">Reason:</label>
        <input id="shiftReasonInput" type="text"></input>
      </div>;

      shiftOptions = <div className="shift-options">
        <button onClick={() => this.sendShiftRequest("reject")}>Confirm Reject</button>
        <button onClick={() => this.setViewMode("default")}>Cancel</button>
      </div>;
    }

    //Build the 'rejected' state view for the shift
    else if (this.state.view === "rejected") {
      shiftMessage = <p>The shift transfer request has been rejected.<br/>The requester and accepter will be notified.</p>

      shiftOptions = <div className="shift-options">
        <button onClick={() => this.props.collapseShift()}>OK</button>
      </div>
    }

    //Build the default state view for the shift
    else {

      //Display admin options for the shift transfer if the user is a manager
      if (this.props.userType === "manager") {

        if (this.props.shiftDetails.status === "Pending Approval") {
          shiftOptions = <div className="shift-options">
            <button onClick={() => this.setViewMode("approve")}>Approve Request</button>
            <button onClick={() => this.setViewMode("reject")}>Reject Request</button>
          </div>;
        }

        else {
          shiftOptions = <div className="shift-options">
            <button onClick={() => this.setViewMode("close")}>Close Request</button>
        </div>;
        }
      }

      //Display only an option to accept the shift transfer if the user is an employee
      else {

        //If the shift is open, display an option to accept the shift
        if (this.props.shiftDetails.status === "Open") {
          shiftOptions = <div className="shift-options">
            <button onClick={() => this.setViewMode("accept")}>Accept Transfer</button>
          </div>;
        }
      }
    }

    //Add all of the information and options for the shift to the display to be returned
    return (
      <div className="shift-body">
        {shiftDetails}
        {shiftMessage}
        {shiftInput}
        {shiftOptions}
      </div>
    )
  }


  sendShiftRequest(requestType) {

    let requestSuccessful;

    requestSuccessful = updateShiftRequest(requestType, this.props.shiftIndex);

    if (requestSuccessful) {

      if (requestType === "accept") {
        this.setViewMode("accepted");
      }

      else if (requestType === "approve") {
        this.setViewMode("approved");
      }

      else if (requestType === "reject") {
        this.setViewMode("rejected");
      }

      else if (requestType === "close") {
        this.setViewMode("closed");
      }
    }

    else {
      this.setViewMode("error");
    }
  }

  setViewMode(newViewMode) {
    this.setState({view: newViewMode});
  }

  render() {

    let shiftViewDetails = this.buildShiftView();

    return (
      <div className="shift expanded">
        <div className="header">
          <h3>{this.props.shiftDetails.date}</h3>
          <button onClick={() => this.props.collapseShift()}><i className="fas fa-times" role="img" aria-label="Minimize Shift"></i></button>
        </div>
        {shiftViewDetails}
      </div>
    )
  }
}

export default ExpandedShift;