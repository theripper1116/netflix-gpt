import { useDispatch } from "react-redux";

import { API_OPTIONS } from "../Constants/optionsForAPI";
import { addMovies } from "../store/storeSlice/MoviesSlice";
import { TMDB_NOW_PLAYING_URL } from "../../utils/Constants/apiURL";

export const useGetNowPlayingMovies = async (URL) => {
  const dispatch = useDispatch();
  const rawNowPlayingMoviesData = await fetch(
    TMDB_NOW_PLAYING_URL,
    API_OPTIONS
  );
  const jsonNowPlayingMoviesData = await rawNowPlayingMoviesData.json();
  dispatch(addMovies(jsonNowPlayingMoviesData.results));
};
