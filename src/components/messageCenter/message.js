import React from 'react';

export default function Message(props) {

  let replyButton;

  //If the message is a notice, it can't receive replies, and should not have a reply option
  if (props.message.type === "notice") {
    replyButton = null;
  }
  
  //Else, create a reply button for the message
  else {
    replyButton =  <button className="secondary-btn" onClick={() => props.setDisplayMode("reply")}>Reply</button>;
  }

  return (
    <div id="message-expanded">
      <div id="expanded-header">
        <button onClick={() => props.setDisplayMode("viewList")}>Back</button>
        <h4>{props.message.subject}——————</h4>
        <h4>{props.message.sender}</h4>
      </div>
      <div id="expanded-body">
        <p id="expanded-sender">{props.message.name}:</p>
        <p id="expanded-message-text">{props.message.message}</p>
        {replyButton}
      </div>
    </div>
  )
}