import { LazyLoadImage } from "react-lazy-load-image-component";

import { MOVIE_IMAGE } from "../../../../utils/constants/imageURL.js";
import { Link } from "react-router-dom";

const MovieCard = ({ movieData }) => {
  const { poster_path, title, id } = movieData;
  return (
    <div className="w-48">
      <Link to={"/playVideo/"+id}>
        <LazyLoadImage
          alt={title + "_image"}
          className="w-44"
          src={MOVIE_IMAGE + poster_path}
        />
      </Link>
    </div>
  );
};

export default MovieCard;
