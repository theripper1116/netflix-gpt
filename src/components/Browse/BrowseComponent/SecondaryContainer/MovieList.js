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
    <div className=" bg-gradient-to-b to-black -mt-72 ">
      <h1 className="text-3xl font-bold px-5 mx-2 py-2 text-white">
        Now Playing
      </h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {nowPlayingMovieList.map((data) => {
            return <MovieCard key={data.id} movieData={data} />;
          })}
        </div>
      </div>
      <h1 className="text-3xl font-bold px-5 mx-2 py-2 text-white">
        Popular Movies
      </h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {popularMovieList.map((data) => {
            return <MovieCard key={data.id} movieData={data} />;
          })}
        </div>
      </div>
      <h1 className="text-3xl font-bold px-5 mx-2 py-2 text-white">
        Top Rated Movies
      </h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {topratedMovieList.map((data) => {
            return <MovieCard key={data.id} movieData={data} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
