import { LazyLoadImage } from "react-lazy-load-image-component";

import {
  MOVIE_IMAGE,
  DEFAULT_MOVIE_IMAGE,
} from "../../utils/constants/imageURL";
import { Link } from "react-router-dom";

const GPTSearchPage = ({ movieData }) => {
  if (!movieData) return;
  const { poster_path, title, id } = movieData;
  return (
    <div className="w-48">
      <Link to={"/playVideo/" + id}>
        <LazyLoadImage
          alt={title + "_image"}
          className="w-44"
          src={poster_path ? MOVIE_IMAGE + poster_path : DEFAULT_MOVIE_IMAGE}
        />
      </Link>
    </div>
  );
};

export default GPTSearchPage;
