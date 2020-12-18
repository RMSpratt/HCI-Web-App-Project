import React from 'react';
import MessageList from './messageList';
import {getEmployeeMessages, getManagementMessages} from '../../data/defaultMessages';
import Message from './message';
import NewMessage from './newMessage';
import ReplyMessage from './replyMessage';

const MESSAGE_FILTER_HEADERS = {
  "none": "Inbox Messages",
  "sent": "Sent Messages",
  "notice": "Notices"
}

class MessageCenter extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      displayMode: "viewList",
      listFilter: "none",
      listIndex: 0,
      messages: null,
      selectedMessage: null,
      sendee: null,
      userType: props.userType,
      warningMsg: null,
    }

    this.setDisplayMode = this.setDisplayMode.bind(this);
    this.verifyMessage = this.verifyMessage.bind(this);
    this.verifyReply = this.verifyReply.bind(this);

    //Get the appropriate messages based on the user type
    if (props.userType === "employee") {
      this.state.messages = getEmployeeMessages();
    }

    else {
      this.state.messages = getManagementMessages();
    }
  }

  
  /* Function: buildCreateDisplay
   * Description: This function is used to build the display for creating a new message.
  */
  buildCreateDisplay() {

    let warningDisplay = null;

    if (this.state.warningMsg) {
      warningDisplay = <div id="message-center-warning">
        <p>{this.state.warningMsg}</p>
      </div>
    }

    return (
      <div id="message-center-create">
        {warningDisplay}
        <NewMessage setDisplayMode={this.setDisplayMode} verifyMessage={this.verifyMessage}/>
      </div>
    )
  }


  /* Function: buildReplyDisplay
   * Description: This function is used to build the display for creating a new reply message.
  */
  buildReplyDisplay() {
    
    let previousMessage = this.state.selectedMessage;

    let warningDisplay = null;

    if (this.state.warningMsg) {
      warningDisplay = <div className="warning-message" id="message-center-warning">
        <p>{this.state.warningMsg}</p>
      </div>
    }

    return (
      <div id="message-center-reply">
        {warningDisplay}
        <ReplyMessage prevMessage={previousMessage.message} recipient={previousMessage.sender} setDisplayMode={this.setDisplayMode} subject={previousMessage.subject} verifyReply={this.verifyReply}/>
        <div id="previous-reply-message">
          <div className="message-panel-header">
              <h3>Reply To Message Text</h3>
          </div>
          <div id="previous-reply-body">
            <p id="previous-reply-text">{this.state.selectedMessage.message}</p>
          </div>
        </div>
      </div>
    )
  }


  /* Function: buildSentDisplay
   * Description: This function is used to build the display for when a new message or reply message has been sent.
  */
  buildSentDisplay() {
    
    return (
      <div className="message-confirm-panel">
        <div className="message-panel-header">
          <h3>Message Send Complete!</h3>
        </div>
        <div className="message-confirm-body">
          <p>Your message has been successfully sent to {this.state.sendee}</p>
          <p>The message can be viewed in your <strong>Sent</strong> messages folder.</p>
        </div>
        <button className="secondary-btn" onClick={() => {this.setDisplayMode("viewSpecific")}}>OK</button>
      </div>
    )
  }


  /* Function: buildViewDisplay
   * Description: This function is used to build the display for viewing messages as a list or specific message.
  */
  buildViewDisplay() {

    let messagePanel;

    //The navigation buttons for scanning through your list of messages
    let listPrevButton;
    let listNextButton;

    //The list filter options
    let inboxFilter;
    let noticeFilter;
    let sentFilter;

    if (this.state.displayMode === "viewSpecific") {
      messagePanel = <Message message={this.state.selectedMessage} setDisplayMode={this.setDisplayMode}/>;
      
      listPrevButton = <button className="disabled" disabled={true}><i className="fas fa-chevron-left" role="img" aria-label="View newer messages"></i></button>
      listNextButton = <button className="disabled" disabled={true}><i className="fas fa-chevron-right" role="img" aria-label="View older messages"></i></button>
    }

    //Else, build a list display of messages
    else {

      //If the user is viewing their most recent stored messages, disable the left list navigation button
      if (this.state.listIndex < 10) {
        listPrevButton = <button className="disabled" disabled={true}><i className="fas fa-chevron-left" role="img" aria-label="View newer messages"></i></button>
      }

      else {
        listPrevButton = <button className="tertiary-btn" onClick={() => this.updateListIndex("newer")}><i className="fas fa-chevron-left" role="img" aria-label="View newer messages"></i></button>
      }

      //If the user is viewing their oldest stored messages, disable the right list navigation button
      if (this.state.listIndex >= this.state.messages.length - 10) {
        listNextButton = <button className="disabled" disabled={true}><i className="fas fa-chevron-right" role="img" aria-label="View older messages"></i></button>
      }

      else {
        listNextButton = <button className="tertiary-btn" onClick={() => this.updateListIndex("older")}><i className="fas fa-chevron-right" role="img" aria-label="View older messages"></i></button>
      }

      //Set the message panel to a list with 10 messages from the current list index
      messagePanel = <MessageList messages={this.state.messages.slice(this.state.listIndex, this.state.listIndex + 10)} startIndex={this.state.listIndex} expandMessage={this.setDisplayMode} updateList={this.updateListIndex}/>;
    }

    //Set the message filters based on the current filter being used
    if (this.state.listFilter === "notice") {
      inboxFilter = <div className="filter-option" role="button" tabIndex="0"  onClick={() => this.updateListFilter("none")} onKeyPress={() => this.updateListFilter("none")}>
        <i className="fas fa-folder" role="img" aria-label="View all messages"></i>
        <p>Inbox</p>
      </div>

      noticeFilter = <div className="filter-option selected">
        <i className="fas fa-folder-open" role="img" aria-label="Filter and view notice messages"></i>
        <p>Notices</p>
      </div>

      sentFilter = <div className="filter-option" role="button" tabIndex="0"  onClick={() => this.updateListFilter("sent")} onKeyPress={() => this.updateListFilter("sent")}>
        <i className="fas fa-folder" role="img" aria-label="Filter and view sent messages"></i>
        <p>Sent by Me</p>
      </div>
    }

    else if (this.state.listFilter === "sent") {
      inboxFilter = <div className="filter-option" role="button" tabIndex="0"  onClick={() => this.updateListFilter("none")} onKeyPress={() => this.updateListFilter("none")}>
        <i className="fas fa-folder" role="img" aria-label="View all messages"></i>
        <p>Inbox</p>
      </div>

      noticeFilter = <div className="filter-option" role="button" tabIndex="0"  onClick={() => this.updateListFilter("notice")} onKeyPress={() => this.updateListFilter("notice")}>
        <i className="fas fa-folder" role="img" aria-label="Filter and view notice messages"></i>
        <p>Notices</p>
      </div>

      sentFilter = <div className="filter-option selected">
        <i className="fas fa-folder-open" role="img" aria-label="Filter and view sent messages"></i>
        <p>Sent by Me</p>
      </div>
    }

    else {
      inboxFilter = <div className="filter-option selected">
        <i className="fas fa-folder-open" role="img" aria-label="View all messages"></i>
        <p>Inbox</p>
      </div>

      noticeFilter = <div className="filter-option" role="button" tabIndex="0" onClick={() => this.updateListFilter("notice")} onKeyPress={() => this.updateListFilter("notice")}>
        <i className="fas fa-folder" role="img" aria-label="Filter and view notice messages"></i>
        <p>Notices</p>
      </div>

      sentFilter = <div className="filter-option" role="button" tabIndex="0" onClick={() => this.updateListFilter("sent")} onKeyPress={() => this.updateListFilter("sent")}>
        <i className="fas fa-folder" role="img" aria-label="Filter and view sent messages"></i>
        <p>Sent by Me</p>
      </div>
    }


    return (
      <div id="message-center-view">
        <div className="left">
          <button className="secondary-btn" id="send-btn" onClick={() => {this.setDisplayMode("create")}}>Write Message</button>
          <div id="filter-panel">
            <div id="filter-panel-header" role="presentation">
              <h3>Message Filters</h3>
            </div>
            <div id="filter-panel-body">
              {inboxFilter}
              {noticeFilter}
              {sentFilter}
            </div>
          </div>
        </div>
        <div id="message-panel">
          <div className="panel-header">
            <div className="left" role="presentation">
            {listPrevButton}
            </div>
            <h2>{MESSAGE_FILTER_HEADERS[this.state.listFilter]}</h2>
            <div className="right" role="presentation">
            {listNextButton}
            </div>
          </div>
          {messagePanel}
        </div>
      </div>
    )
  }


  /* Function: setDisplayMode
   * Description: This function is used by multiple sub-components to call for a change in the Message Center display.
   *              The modes for display include: 'viewList', 'viewSpecific' (with message index param), 'reply', 'create', and 'sent'.
  */ 
  setDisplayMode(newMode, index=null) {

    //If the new mode is to view a specific message, use the passed index if provided to get the specific message to display
    if (newMode === "viewSpecific" && index !== null) {

      if (index !== null) {
        this.setState({displayMode: newMode, selectedMessage: this.state.messages[index], warningMsg: null});
      }

      else {
        this.setState({displayMode: newMode, selectedMessage: this.state.selectedMessage, warningMsg: null});
      }
    }

    //Else, just update the display mode as notmal
    else {
      this.setState({displayMode: newMode});
    }
  }


  /* Function: updateListFilter
   * Description: Simple callback function to update the list of messages based on a given filter, or "none", if retrieving all 
   *              received messages.
  */
  updateListFilter(filter) {

    if (this.state.userType === "manager") {
      this.setState({listFilter: filter, messages: getManagementMessages(filter)});
    }

    else {
      this.setState({listFilter: filter, messages: getEmployeeMessages(filter)});
    }
  }


  /* Function: updateListIndex
   * Description: Simple callback function to update the index of the messages to be displayed.
  */ 
  updateListIndex(direction) {

    let currentIndex = this.state.listIndex;
    let numMessages = this.state.messages.length;

    //If the user is trying to retrieve older messages, make sure that there are enough to display
    if (direction === "older" && currentIndex < (numMessages - 10)) {
      this.setState({listIndex: this.state.listIndex + 10});
    }

    //Else if the user is navigating back to their newer messages, make sure they aren't already at the start of the mailbox
    else if (direction === "newer" && currentIndex > 0) {
      this.setState({listIndex: this.state.listIndex - 10});
    }
  }


  verifyMessage() {

    let messageRecipientEl = document.getElementById("new-message-recipient");
    let messageSubjectEl = document.getElementById("new-message-subject");
    let messageBodyEl = document.getElementById("new-message-body");

    if (messageRecipientEl === null || messageRecipientEl.value.length === 0) {
      this.setState({warningMsg: "Warn: Please provide a recipient to deliver this message to."});
    }

    else if (messageRecipientEl.value.includes("@dwh") === false || (messageRecipientEl.value.includes(".ca") === false && messageRecipientEl.value.includes(".com") === false)) {
      this.setState({warningMsg: "Warn: The recipient provided for the message was invalid. Only registered @dwh accounts can be messaged."});
    }

    else if (messageSubjectEl === null || messageSubjectEl.value.length === 0) {
      this.setState({warningMsg: "Warn: Your message is missing a subject."});
    }

    else if (messageBodyEl === null || messageBodyEl.value.length === 0) {
      this.setState({warningMsg: "Warn: Your message body is empty."});
    }

    else {
      this.setState({displayMode: "sent", sendee: messageRecipientEl.value, warningMsg: null})
    }
  }

  verifyReply() {
    let replySubjectEl = document.getElementById("reply-message-body");

    if (replySubjectEl === null || replySubjectEl.value.length === 0) {
      this.setState({warningMsg: "Warn: Your message body is empty."});
    }

    else {
      this.setState({displayMode: "sent", sendee: this.state.selectedMessage.sender, warningMsg: null})
    }
  }

  render() {

    let displayContent;
    
    if (this.state.displayMode === "sent") {
      displayContent = this.buildSentDisplay();
    }

    else if (this.state.displayMode === "create") {
      displayContent = this.buildCreateDisplay();
    }

    else if (this.state.displayMode === "reply") {
      displayContent = this.buildReplyDisplay();
    }

    else {
      displayContent = this.buildViewDisplay();
    }

    return (
      <main>
        {displayContent}
      </main>
    )
  }
}

export default MessageCenter;