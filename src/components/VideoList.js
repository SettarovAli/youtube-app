import React from "react";
import VideoItem from "./VideoItem";
import Spinner from "./Spinner";

const VideoList = ({ videos, onVideoSelect }) => {
  if (videos.length === 0) {
    return (
      <div className="video__list video__spinner-box ui segment">
        <Spinner />
        <div>Please enter your search term</div>
      </div>
    );
  }

  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  return (
    <div className="video__list ui relaxed divided list">{renderedList}</div>
  );
};

export default VideoList;
