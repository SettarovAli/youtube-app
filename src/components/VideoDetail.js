import React from "react";
import Spinner from "./Spinner";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div className="video__spinner video__spinner-box ui segment">
        <Spinner />
        <div>Please enter your search term</div>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="video__detail">
      <div className="ui embed">
        <iframe
          src={videoSrc}
          title={video.snippet.title}
          frameBorder="0"
        ></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
