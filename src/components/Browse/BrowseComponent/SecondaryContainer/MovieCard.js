import { MOVIE_IMAGE } from "../../../../utils/Constants/imageURL";

const MovieCard = ({ movie }) => {
  const { poster_path, title } = movie;
  console.log(movie);
  return (
    <div className="w-48">
      <img alt={title+"_image"} className="p-1" src={MOVIE_IMAGE + poster_path} />
    </div>
  );
};

export default MovieCard;
