import { useSelector } from "react-redux";

import MovieList from "./SecondaryContainer/MovieList";

const SecondaryContainer = () => {
  const moviesList = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!moviesList) return null;

  return (
    <>
      <MovieList list={moviesList} />
    </>
  );
};

export default SecondaryContainer;
