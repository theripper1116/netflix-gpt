import { useSelector } from "react-redux";

import MovieList from "./SecondaryContainer/MovieList";
import { useGetPopularMovies } from "../../../utils/getMovies/useGetPopularMovies";
import useGetTopRatedMovies from "../../../utils/getMovies/useGetTopRatedMovies";

const SecondaryContainer = () => {
  useGetPopularMovies();
  useGetTopRatedMovies();

  const moviesList = useSelector((store) => store.movies);

  if (
    !moviesList.nowPlayingMovies &&
    !moviesList.popularMovies &&
    !moviesList.topRatedMovies
  )
    return null;

  return (
    <>
      <MovieList
        nowPlayingMovieList={moviesList.nowPlayingMovies}
        popularMovieList={moviesList.popularMovies}
        topratedMovieList={moviesList.topRatedMovies}
      />
    </>
  );
};

export default SecondaryContainer;
