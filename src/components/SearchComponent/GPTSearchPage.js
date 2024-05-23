import {
  MOVIE_IMAGE,
  DEFAULT_MOVIE_IMAGE,
} from "../../utils/Constants/imageURL";

const GPTSearchPage = ({ movieData }) => {
  if (!movieData) return;
  const { poster_path, title } = movieData;
  return (
    <div className="w-48">
      <img
        alt={title + "_image"}
        className="p-1"
        src={poster_path ? MOVIE_IMAGE + poster_path : DEFAULT_MOVIE_IMAGE}
      />
    </div>
  );
};

export default GPTSearchPage;
