import Header from "../Header";
import { useGetNowPlayingMovies } from "../../utils/getMovies/useGetNowPlayingMovies";
import MainContainer from "./BrowseComponent/MainContainer";
import SecondaryContainer from "./BrowseComponent/SecondaryContainer";
const { REACT_APP_TMDB_NOW_PLAYING_URL } = process.env;

const Browse = () => {
  useGetNowPlayingMovies(REACT_APP_TMDB_NOW_PLAYING_URL);
  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </>
  );
};

export default Browse;
