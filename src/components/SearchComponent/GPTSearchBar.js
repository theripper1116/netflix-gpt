import { useDispatch, useSelector } from "react-redux";

import openai from "../../utils/optionsForApi/openAIHelper";
import {
  addSearchedMovies,
  addSearchedMoviesFromTMDB,
} from "../../utils/store/storeSlice/gptSlice";
import { TMDB_MOVIE_SEARCH_URL } from "../../utils/Constants/apiURL";
import { API_OPTIONS } from "../../utils/optionsForApi/optionsForAPI";
import GPTSearchPage from "./GPTSearchPage";
import getMovieResultFromOpenAI from "../../utils/openAIResponse/getMovieResultFromOpenAI";
import getMovieDetailsFromTMDB from "../../utils/openAIResponse/getMovieDetailsFromTMDB";

const GPTSearchBar = () => {
  const getSearchedMoviesFromStore = useSelector((store) => store.openAIGPT);
  const dispatch = useDispatch();

  const storeMovieResultFromOpenAI = () => {
    dispatch(addSearchedMovies(getMovieResultFromOpenAI()));
    console.log(getSearchedMoviesFromStore?.searchedResultForMovies);
    dispatch(
      addSearchedMoviesFromTMDB(
        getMovieDetailsFromTMDB(
          getSearchedMoviesFromStore?.searchedResultForMovies
        )
      )
    );
    console.log(getSearchedMoviesFromStore?.searchedMoviesFromTMDB);
  };
  return (
    <div className="absolute my-48 mx-[30%]">
      <form
        className="bg-black p-44 bg-gradient-to-b from-black opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          id="input-search-box-for-openAI-gpt"
          className="p-5 ml-2 rounded-xl text-white bg-black opacity-70 border border-red-700"
          type="text"
          placeholder="Search for a Show/Movies"
        ></input>
        <button
          onClick={() => {
            storeMovieResultFromOpenAI();
          }}
          className="bg-red-700 text-white font-bold text-xl p-2 rounded-lg mt-4 ml-20"
        >
          Search
        </button>
      </form>
      <div>
        {getSearchedMoviesFromStore?.searchedMoviesFromTMDB?.map(
          (movieData) => {
            <GPTSearchPage movieData={movieData} />;
          }
        )}
      </div>
    </div>
  );
};

export default GPTSearchBar;
