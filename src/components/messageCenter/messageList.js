import React from 'react';

export default function MessageList(props) {

  let messages = props.messages;
  let messageElements = [];
  let messageIndex = props.startIndex;

  messages.forEach((message) => {

    let currentIndex = messageIndex;

    let subject = React.createElement('td', {key: "sub" + currentIndex, className: "subject"}, 
      <p onClick={() => props.expandMessage("viewSpecific", currentIndex)} onKeyDown={() => props.expandMessage("viewSpecific", currentIndex)}>{message.subject}</p>);

    let sender = React.createElement('td', {key: "send" + currentIndex, className: "sender"}, message.sender);
    let dt = React.createElement('td', {key: "dt" + currentIndex, className: "dt"}, [message.date, " - ", message.time]);

    //Create the table row to hold all of the message information elements
    let messageDiv = React.createElement('tr', {key: currentIndex, className: "message"}, [subject, sender, dt]);
    messageElements.push(messageDiv);

    messageIndex++;
  });

  return (
    <table id="message-list">
      <thead>
        <tr>
          <th>Subject</th>
          <th>Sender</th>
          <th>Date Received</th>
        </tr>
      </thead>
      <tbody>
        {messageElements}
      </tbody>
    </table>
  )
}

