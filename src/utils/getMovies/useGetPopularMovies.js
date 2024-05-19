import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { API_OPTIONS } from "../Constants/optionsForAPI";
import { addPopularMovies } from "../store/storeSlice/MoviesSlice";
import { TMDB_POPULAR_MOVIES_URL } from "../../utils/Constants/apiURL";

export const useGetPopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const rawJsonPopularMoviesData = await fetch(
      TMDB_POPULAR_MOVIES_URL,
      API_OPTIONS
    );
    const jsonPopularMoviesData = await rawJsonPopularMoviesData.json();
    dispatch(addPopularMovies(jsonPopularMoviesData.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};
