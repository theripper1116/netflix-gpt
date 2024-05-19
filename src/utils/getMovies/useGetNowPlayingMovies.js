import { useDispatch } from "react-redux";

import { API_OPTIONS } from "../Constants/optionsForAPI";
import { addMovies } from "../store/storeSlice/MoviesSlice";
const { REACT_APP_TMDB_NOW_PLAYING_URL } = process.env;

export const useGetNowPlayingMovies = async (URL) => {
  const dispatch = useDispatch();
  const rawNowPlayingMoviesData = await fetch(
    REACT_APP_TMDB_NOW_PLAYING_URL,
    API_OPTIONS
  );
  const jsonNowPlayingMoviesData = await rawNowPlayingMoviesData.json();
  dispatch(addMovies(jsonNowPlayingMoviesData.results));
};
