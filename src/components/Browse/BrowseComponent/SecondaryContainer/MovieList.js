import MovieCard from "../SecondaryContainer/MovieCard";

const MovieList = ({
  nowPlayingMovieList,
  popularMovieList,
  topratedMovieList,
}) => {
  if (
    popularMovieList === null &&
    nowPlayingMovieList === null &&
    topratedMovieList === null
  )
    return;

  return (
    <div className="bg-black">
      <h1 className="text-3xl font-bold py-2 px-2 text-white">Now Playing</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {nowPlayingMovieList.map((data) => {
            return <MovieCard movieData={data} />;
          })}
        </div>
      </div>
      <h1 className="text-3xl font-bold py-2 px-2 text-white">
        Popular Movies
      </h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {popularMovieList.map((data) => {
            return <MovieCard movieData={data} />;
          })}
        </div>
      </div>
      <h1 className="text-3xl font-bold py-2 px-2 text-white">
        Top Rated Movies
      </h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {topratedMovieList.map((data) => {
            return <MovieCard movieData={data} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
