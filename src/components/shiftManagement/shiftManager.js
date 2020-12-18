import React from 'react';
import { getClosedRequests, getOpenRequests } from '../../data/defaultShiftRequests';
import { getShiftArray } from '../../data/defaultShifts';
import ClosedShift from './closedShift';
import ExpandedShift from './expandedShift';
import NewShiftRequest from './newShiftRequest';
import OpenShift from './openShift';


class ShiftManager extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      closedRequests: getClosedRequests(),
      closedIndex: 0,
      displayMode: "view",
      openRequests: getOpenRequests(),
      selectedIndex: null,
      openIndex: 0,
      userShifts: getShiftArray(),
      viewMode: "condensed",
      warningMsg: null
    }

    this.collapseShift = this.collapseShift.bind(this);
    this.expandShift = this.expandShift.bind(this);
    this.setDisplayMode = this.setDisplayMode.bind(this);
    this.validateTransferRequest = this.validateTransferRequest.bind(this);
  }


  /* FUNCTION: buildCondensedShiftPanel
   * Description: This function constructs a condensed shift panel displaying the given type of shifts.
  */ 
  buildCondensedShiftPanel(shiftType) {

    let shiftElements;
    let prevButton;
    let nextButton;

    if (shiftType === "open") {
      shiftElements = this.buildOpenShifts();
    }

    else {
      shiftElements = this.buildClosedShifts();
    }

    //Create the previous and next buttons for navigating through the list of shift requests
    prevButton = this.buildShiftNavButton(shiftType, "previous");
    nextButton = this.buildShiftNavButton(shiftType, "next");

    return (
      <div className="shift-request-panel">
        <div className="nav-div previous" role="presentation">
          {prevButton}
        </div>
          {shiftElements}
        <div className="nav-div next" role="presentation">
          {nextButton}
        </div>
      </div>
    );
  }

  buildClosedShifts() {

    //The array of shift elements to be returned
    let closedElements = [];

    let closedRequests = this.state.closedRequests; 
    let closedIndex = this.state.closedIndex;

    //If there are no open/closed shift transfer requests, display a message instead
    if (closedRequests.length === 0) {
      closedElements = <p>There are no closed shift transfer requests at this time.</p>;
    }

    //Else, get the shift transfer requests to be displayed
    else {

      closedElements.push(
        <ClosedShift key={"closedShift1"} shiftDetails = {closedRequests[closedIndex]}/>
      )

      //If there is at least one more open request, display it as well
      if (closedIndex + 1 < closedRequests.length) {

        closedElements.push(
          <ClosedShift key={"closedShift2"} shiftDetails = {closedRequests[closedIndex + 1]}/>
        )
      }
    }
    
    return closedElements;
  }

  buildConfirmationDisplay() {

    return (
      <div id="request-confirmation-panel">
         <div className="request-confirmation-header">
          <h3>Shift Transfer Request Complete!</h3>
        </div>
        <div className="request-confirmation-body">
          <p>Your shift transfer request has successfully been created.</p>
          <p>You will be notified of any updates to your request by management or other employees.</p>
        </div>
        <button className="secondary-btn" onClick={() => {this.setDisplayMode("view")}}>OK</button>
      </div>
    )
  }


  buildCreateDisplay() {

    let displayElements = [];
    let warningDisplay = null;

    if (this.state.warningMsg) {
      warningDisplay = <div className="warning-message" id="shift-manager-warning">
        <p>{this.state.warningMsg}</p>
      </div>
    }

    displayElements.push([
      warningDisplay,
      <NewShiftRequest shifts={this.state.userShifts} cancelRequest={this.setDisplayMode} validateRequest={this.validateTransferRequest}/>
    ])

    return displayElements;
  }


  buildExpandedShiftView() {

    return (
      <div className="shift-request-panel">
        <div className="nav-div previous" role="presentation">
          <button className="disabled" disabled={true}><i className="fas fa-chevron-left" role="img" aria-label="View newer requests"/></button>
        </div>
        <ExpandedShift shiftDetails={this.state.openRequests[this.state.selectedIndex]} shiftIndex={this.state.selectedIndex} collapseShift={this.collapseShift} userType={this.props.userType}/>
        <div className="nav-div next" role="presentation">
          <button className="disabled" disabled={true}><i className="fas fa-chevron-right" role="img" aria-label="View older requests"/></button>
        </div>
      </div>
    )
  }


  buildOpenShifts() {

    //The array of shift elements to be returned
    let openElements = [];

    let openRequests = this.state.openRequests; 
    let openIndex = this.state.openIndex;

    //If there are no open/closed shift transfer requests, display a message instead
    if (openRequests.length === 0) {
      openElements = <p>There are no open shift transfer requests at this time.</p>;
    }

    //Else, get the shift transfer requests to be displayed
    else {

      openElements.push(
        <OpenShift key={"openShift1"} shiftDetails = {openRequests[openIndex]} shiftIndex={openIndex} expandShift={this.expandShift}/>
      )

      //If there is at least one more open request, display it as well
      if (openIndex + 1 < openRequests.length) {

        openElements.push(
          <OpenShift key={"openShift2"} shiftDetails = {openRequests[openIndex + 1]} shiftIndex={openIndex + 1} expandShift={this.expandShift}/>
        )
      }
    }
    
    return openElements;
  }


  buildShiftNavButton(shiftType, navType) {

    let navButton;
    let shiftIndex;

    //Build the button for the open shift request panel
    if (shiftType === "open") {
      shiftIndex = this.state.openIndex;
    }

    else {
      shiftIndex = this.state.closedIndex;
    }

    //Build a backwards navigation button
    if (navType === "previous") {

      //If the current index is 0, the previous button should be disabled
      if (shiftIndex === 0) {
        navButton = <button className="disabled" disabled={true}><i className="fas fa-chevron-left" role="img" aria-label="View newer requests"/></button>;
      }

      //Else, the user can navigate backwards through the shifts
      else {
        navButton = <button className="tertiary-btn" onClick={() => this.updateShiftIndex("previous", shiftType)}><i className="fas fa-chevron-left" role="img" aria-label="View older requests"/></button>;
      }
    }

    //Build a forwards navigation button
    else {

      //If the current index is equal to the number of shift transfer requests, the next button should be disabled
      if (shiftIndex === this.state.openRequests.length - 1) {
        navButton = <button className="disabled" disabled={true}><i className="fas fa-chevron-right" role="img" aria-label="View older requests"/></button>;
      }

      //Else, the user can navigate forwards through the shifts
      else {
        navButton = <button className="tertiary-btn" onClick={() => this.updateShiftIndex("next", shiftType)}><i className="fas fa-chevron-right" role="img" aria-label="View older requests"/></button>
      }
    }

    return navButton;
  }

  buildViewDisplay() {

    let createButton = null;

    let openShifts = this.state.viewMode === "condensed" ? this.buildCondensedShiftPanel("open") : this.buildExpandedShiftView();
    let closedShifts = this.buildCondensedShiftPanel("closed");

    //If the current user is a regular employee, display the button option for creating new shift transfer requests
    if (this.props.userType === "employee") {
      createButton = <button className="secondary-btn" onClick={() => this.setDisplayMode("create")}>Create Request</button>  
    }

    return (
      <div>
        <div className="shift-request-header">
          <h2>Open Requests</h2>
        </div>
        {openShifts}
        {createButton}
        <h2 className="shift-request-header">Closed Requests</h2>
        {closedShifts}
        <p id="shift-note">* Closed Shift Requests will be Displayed for 30 Days. *</p>
      </div>
    )
  }


  collapseShift() {
    this.setState({selectedIndex: null, viewMode: "condensed"});
  }

  expandShift(index) {
    this.setState({selectedIndex: index, viewMode: "expanded"});
  }

  setDisplayMode(mode) {
    this.setState({displayMode: mode});
  }

  updateShiftIndex(action, type) {

    //Update the shiftIndex for a backwards navigation request
    if (action === "previous") {

      if (type === "open") {
        this.setState({openIndex: this.state.openIndex - 2});
      }

      else {
        this.setState({closedIndex: this.state.closedIndex - 2});
      }
    }

    //Update the shiftIndex for a forwards navigation request
    else {

      if (type === "open") {
        this.setState({openIndex: this.state.openIndex + 2});
      }

      else {
        this.setState({closedIndex: this.state.closedIndex + 2})
      }
    }
  }

  validateTransferRequest() {

    let shiftSelectEl = document.getElementById('shift-request-select');

    if (shiftSelectEl === null || shiftSelectEl.value === "unselected") {
      this.setState({warningMsg: "Please select a shift to create a request for."})
    }

    else {
      this.setState({displayMode: "confirm", warningMsg: null});
    }
  }

  render() {

    let displayContents;

    if (this.state.displayMode === "create") {
      displayContents = this.buildCreateDisplay();
    }

    else if (this.state.displayMode === "confirm") {
      displayContents = this.buildConfirmationDisplay();
    }

    else {
      displayContents = this.buildViewDisplay();
    }

    return (
      <main id="shift-manager">
        {displayContents}
      </main>
    )
  }
}

export default ShiftManager;