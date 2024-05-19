import { useSelector } from "react-redux";

import VideoTitle from "./MainContainer/VideoTitle";
import VideoBackground from "./MainContainer/VideoBackground";

const MainContainer = () => {
  const getMovieDataForPlayback = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  if (!getMovieDataForPlayback) return;
  return (
    <>
      <VideoTitle movieData={getMovieDataForPlayback[0]} />
      <VideoBackground movieId={getMovieDataForPlayback[0].id} />
    </>
  );
};

export default MainContainer;
