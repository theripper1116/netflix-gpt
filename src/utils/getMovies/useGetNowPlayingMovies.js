import { useDispatch } from "react-redux";

import { API_OPTIONS } from "../Constants/optionsForAPI";
import { addMovies } from "../store/storeSlice/MoviesSlice";

export const useGetNowPlayingMovies = async () => {
  const dispatch = useDispatch();
  const rawNowPlayingMoviesData = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    API_OPTIONS
  );
  const jsonNowPlayingMoviesData = await rawNowPlayingMoviesData.json();
  dispatch(addMovies(jsonNowPlayingMoviesData.results));
};
