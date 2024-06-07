import { LazyLoadImage } from "react-lazy-load-image-component";

import {
  MOVIE_IMAGE,
  DEFAULT_MOVIE_IMAGE,
} from "../../utils/constants/imageURL";

const GPTSearchPage = ({ movieData }) => {
  if (!movieData) return;
  const { poster_path, title } = movieData;
  return (
    <div className="w-48">
      <LazyLoadImage
        alt={title + "_image"}
        className="p-1"
        src={poster_path ? MOVIE_IMAGE + poster_path : DEFAULT_MOVIE_IMAGE}
      />
    </div>
  );
};

export default GPTSearchPage;
