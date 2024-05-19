import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { API_OPTIONS } from "../Constants/optionsForAPI";
import { addTopRatedMovies } from "../store/storeSlice/MoviesSlice";
import { TMDB_TOP_RATED_URL } from "../../utils/Constants/apiURL";

export const useGetTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const rawJsonPopularMoviesData = await fetch(
      TMDB_TOP_RATED_URL,
      API_OPTIONS
    );
    const jsonPopularMoviesData = await rawJsonPopularMoviesData.json();
    dispatch(addTopRatedMovies(jsonPopularMoviesData.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useGetTopRatedMovies;
