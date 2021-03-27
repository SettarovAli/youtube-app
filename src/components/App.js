import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import Header from "./Header";
import useVideos from "../hooks/useVideos";

import "./App.scss";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("cristiano ronaldo");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <Header />
      <SearchBar onFormSubmit={search} />
      <div className="video__container">
        <VideoDetail video={selectedVideo} />
        <VideoList
          onVideoSelect={(video) => setSelectedVideo(video)}
          videos={videos}
        />
      </div>
    </div>
  );
};

export default App;
