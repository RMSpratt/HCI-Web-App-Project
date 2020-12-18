import React from 'react';

export default function ReplyMessage(props) {

  return (
    <div id="reply-message">
      <div className="message-panel-header">
          <h3>Reply Message</h3>
      </div>
      <p><strong>RE Subject:</strong> {props.subject}</p>
      <p><strong>RE Sender:</strong> {props.recipient}</p>
      <textarea id="reply-message-body" placeholder="Begin typing here..." rows="10"></textarea>
      <div className="message-create-options">
        <button className="secondary-btn" id="message-cancel-btn" onClick={() => {props.setDisplayMode("viewSpecific")}}>Cancel Reply</button>
        <button className="secondary-btn" id="message-send-btn" onClick={props.verifyReply}>Send Reply</button>
      </div>
    </div>
  )
}