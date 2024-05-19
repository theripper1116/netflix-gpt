import MovieCard from "../SecondaryContainer/MovieCard";

const MovieList = ({ list }) => {
  if (list === null) return;

  return (
    <div>
      <h1 className="text-3xl font-bold py-2 px-2">Now Playing</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {list.map((data) => {
            return <MovieCard movie={data} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
