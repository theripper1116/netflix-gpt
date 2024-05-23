import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { API_OPTIONS } from "../optionsForApi/optionsForAPI";
import { addMovies } from "../store/storeSlice/MoviesSlice";
import { TMDB_NOW_PLAYING_URL } from "../../utils/Constants/apiURL";

export const useGetNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const rawNowPlayingMoviesData = await fetch(
      TMDB_NOW_PLAYING_URL,
      API_OPTIONS
    );
    const jsonNowPlayingMoviesData = await rawNowPlayingMoviesData.json();
    dispatch(addMovies(jsonNowPlayingMoviesData.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
