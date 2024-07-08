import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";

import trailerListInterface from "../../utils/InterfaceForTS/trailerListInterface.ts";
import useGetNowplayingMovieTrailer from "../../utils/getMovies/useGetNowPlayingMovieTrailer";
import { useParams } from "react-router-dom";
import { YOUTUBE_URL } from "../../utils/constants/videoURL.ts";

const PlayVideo = () => {
  const { movieId} = useParams();
  useGetNowplayingMovieTrailer(movieId);
  const trailerKey: trailerListInterface = useSelector(
    (store: { movies: { playbackVideoInfo: trailerListInterface } }) =>
      store.movies?.playbackVideoInfo
  );
  return (
    <div className="aspect-video w-screen">
      <ReactPlayer
        url={YOUTUBE_URL + trailerKey?.key}
        controls={true}
        height="100%"
        width="100%"
      />
    </div>
  );
};

export default PlayVideo;
