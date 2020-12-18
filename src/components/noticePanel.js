import React from 'react';

export default function NoticePanel(props) {

  let notices = [];
  let noticeIndex = 0;

  //Create the array of notices to be displayed
  props.notices.forEach(notice => {
    
    notices.push(
      <div className="notice" key={"notice" + noticeIndex}>
        <div className="notice-header">
          <h3>{notice.subject}</h3>
        </div>
        <div className="notice-body">
          <p className="sender"><strong>Sender</strong>: {notice.sender}</p>
          <p className="message">{notice.message}</p>
          <p className="dt"><strong>Sent</strong>: {notice.date} {notice.time}</p>
        </div>
      </div>
    )

    noticeIndex++;
  });

  return (
    <div id="notice-panel">
      <div id="notice-panel-header">
        <h2>Notices</h2>
      </div>
      <div id="notice-panel-body">
        {notices}
      </div>
    </div>
  )
}