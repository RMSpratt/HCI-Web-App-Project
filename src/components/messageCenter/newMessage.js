import React from 'react';

export default function NewMessage(props) {

  return (
    <div id="new-message">
      <div className="message-panel-header">
        <h3>New Message</h3>
      </div>
      <div className="new-message-input">
        <label htmlFor="new-message-recipient">Recipient:</label>
        <input id="new-message-recipient" placeholder="example@dwh.com" type="text"></input>
      </div>
      <div className="new-message-input">
        <label htmlFor="new-message-subject">Subject:</label>
        <input id="new-message-subject" type="text"></input>
      </div>
      <textarea id="new-message-body" placeholder="Begin typing here..." rows="10"></textarea>
      <div className="message-create-options">
        <button className="secondary-btn" id="message-cancel-btn" onClick={() => {props.setDisplayMode("viewList")}}>Cancel</button>
        <button className="secondary-btn" id="message-send-btn" onClick={props.verifyMessage}>Send</button>
      </div>
    </div>
  )
}