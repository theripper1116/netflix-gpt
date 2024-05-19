import { useSelector } from "react-redux";

import useGetNowPlayingMoviesTrailer from "../../../../utils/getMovies/useGetNowPlayingMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useGetNowPlayingMoviesTrailer(movieId);

  const trailerKey = useSelector((store) => store.movies?.playbackVideoInfo);

  if (!movieId) return null;
  if (!trailerKey) return null;
  return (
    <div className="w-screen aspect-video">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerKey?.key +
          "?autoplay=1&mute=1&loop=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
