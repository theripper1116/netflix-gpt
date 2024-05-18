import { useEffect } from "react";

import { useGetNowPlayingMovies } from "../../../utils/getMovies/useGetNowPlayingMovies";
const { REACT_APP_TMDB_API_FOR_PLAYBACK_VIDEO } = process.env;

const VideoBackground = ({ movieId }) => {
  useGetNowPlayingMovies(REACT_APP_TMDB_API_FOR_PLAYBACK_VIDEO + movieId);
};

export default VideoBackground;
