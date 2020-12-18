import React from 'react';


export default function VideoPanel(props) {

  let videoPreviews = [];
  let videoIndex = 0;

  console.log("Previews: " + videoPreviews.length);
  
  props.titles.forEach(title => {
    videoPreviews.push(
    <div className="video" key={"video" + videoIndex}>
      <div className="video-preview">
        <img src={props.images[videoIndex]} alt={title}/>
      </div>
      <p className="video-title">{title}</p>
    </div>
    )
    videoIndex++;
  });

  return (
    <div className="video-section">
      <div className="video-section-header">
        <h2>{props.header}</h2>
      </div>
      <div className="video-section-body">
        {videoPreviews}
      </div>
    </div>
  )
}