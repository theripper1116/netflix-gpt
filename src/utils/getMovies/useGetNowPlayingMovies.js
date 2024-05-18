import { useDispatch } from "react-redux";

import { API_OPTIONS } from "../Constants/optionsForAPI";
import { addMovies, addPlayback } from "../store/storeSlice/MoviesSlice";
const {
  REACT_APP_TMDB_NOW_PLAYING_URL,
  REACT_APP_TMDB_API_FOR_PLAYBACK_VIDEO,
} = process.env;

export const useGetNowPlayingMovies = async (URL) => {
  if (URL === REACT_APP_TMDB_NOW_PLAYING_URL) {
    const dispatch = useDispatch();
    const rawNowPlayingMoviesData = await fetch(URL, API_OPTIONS);
    const jsonNowPlayingMoviesData = await rawNowPlayingMoviesData.json();
    dispatch(addMovies(jsonNowPlayingMoviesData.results));
  }
  else if(URL === REACT_APP_TMDB_API_FOR_PLAYBACK_VIDEO){
    const dispatch = useDispatch();
    const rawPlaybackVideoData = await fetch(URL, API_OPTIONS);
    const jsonRawPlaybackVideoData = await rawPlaybackVideoData.json();
    dispatch(addPlayback(jsonRawPlaybackVideoData));
  }
};
