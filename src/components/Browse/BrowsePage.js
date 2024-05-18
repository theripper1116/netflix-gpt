import Header from "../Header";
import { useGetNowPlayingMovies } from "../../utils/getMovies/useGetNowPlayingMovies";
import MainContainer from "./BrowseComponent/MainContainer";
import SecondaryContainer from "./BrowseComponent/SecondaryContainer";

const Browse = () => {
  useGetNowPlayingMovies();
  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </>
  );
};

export default Browse;
