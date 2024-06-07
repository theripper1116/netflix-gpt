import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";

import trailerListInterface from "../../utils/InterfaceForTS/trailerListInterface";

const PlayVideo = () => {
  const trailerKey: trailerListInterface = useSelector(
    (store: { movies: { playbackVideoInfo: trailerListInterface } }) =>
      store.movies?.playbackVideoInfo
  );
  return (
    <div className="aspect-video w-screen">
      <ReactPlayer
        url={"https://www.youtube.com/embed/" + trailerKey?.key}
        controls={true}
        height="100%"
        width="100%"
      />
    </div>
  );
};

export default PlayVideo;
