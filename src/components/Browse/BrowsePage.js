import { useEffect } from "react";
import { useSelector } from "react-redux";

import Header from "../Header";
import { useGetNowPlayingMovies } from "../../utils/getMovies/useGetNowPlayingMovies";
import MainContainer from "./BrowseComponent/MainContainer";
import SecondaryContainer from "./BrowseComponent/SecondaryContainer";

const Browse = () => {
  useGetNowPlayingMovies();
  const getNowPlayingMoviesData = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );

  return (
    <>
      <Header />
      <MainContainer mainMovie={getNowPlayingMoviesData[0]} />
      <SecondaryContainer />
    </>
  );
};

export default Browse;
