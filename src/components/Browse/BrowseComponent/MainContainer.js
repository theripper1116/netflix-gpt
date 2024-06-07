import { useSelector } from "react-redux";

import VideoTitle from "./mainContainer/VideoTitle";
import VideoBackground from "./mainContainer/VideoBackground";

const MainContainer = () => {
  const getMovieDataForPlayback = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  if (getMovieDataForPlayback.length === 0) return;
  return (
    <>
      <VideoTitle movieData={getMovieDataForPlayback[0]} />
      <VideoBackground movieId={getMovieDataForPlayback[0]?.id} />
    </>
  );
};

export default MainContainer;
