import { LazyLoadImage } from "react-lazy-load-image-component";

import { MOVIE_IMAGE } from "../../../../utils/constants/imageURL.js";
import ShimmerUI from "../../../../shimmer/ShimmerUI.tsx";

const MovieCard = ({ movieData }) => {
  const { poster_path, title } = movieData;
  return (
    <div className="w-48">
      <LazyLoadImage
        alt={title + "_image"}
        className="p-1"
        src={MOVIE_IMAGE + poster_path}
      />
    </div>
  );
};

export default MovieCard;
