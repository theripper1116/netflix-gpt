import { useSelector } from "react-redux";

import MovieList from "./secondaryContainer/MovieList";
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
      <div className="bg-black">
        <div className="relative z-20">
          <MovieList
            nowPlayingMovieList={moviesList.nowPlayingMovies}
            popularMovieList={moviesList.popularMovies}
            topratedMovieList={moviesList.topRatedMovies}
          />
        </div>
      </div>
    </>
  );
};

export default SecondaryContainer;
