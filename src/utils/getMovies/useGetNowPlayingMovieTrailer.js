import { useDispatch } from "react-redux";

import { API_OPTIONS } from "../Constants/optionsForAPI";
import { addPlaybackVideo } from "../store/storeSlice/MoviesSlice";
import { useEffect } from "react";
import { TMDB_API_FOR_PLAYBACK_VIDEO } from "../../utils/Constants/apiURL";

const useGetNowPlayingMoviesTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getNowPlayingMovieData = async () => {
    const rawNowPlayingMoviesData = await fetch(
      TMDB_API_FOR_PLAYBACK_VIDEO.replace("movie_id", movieId),
      API_OPTIONS
    );
    const jsonNowPlayingMoviesData = await rawNowPlayingMoviesData.json();
    const trailerForNowPlayingMovie = jsonNowPlayingMoviesData?.results?.filter(
      (video) => video.type === "Trailer"
    );
    dispatch(
      addPlaybackVideo(
        trailerForNowPlayingMovie.length != 0
          ? trailerForNowPlayingMovie[0]
          : jsonNowPlayingMoviesData?.results[0]
      )
    );
  };
  useEffect(() => {
    getNowPlayingMovieData();
  }, []);
};

export default useGetNowPlayingMoviesTrailer;
