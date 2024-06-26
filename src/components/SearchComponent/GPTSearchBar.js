import { useDispatch, useSelector } from "react-redux";

import openai from "../../utils/optionsForApi/openAIHelper";
import {
  addSearchedMovies,
  addSearchedMoviesFromTMDB,
  clearSearchedData,
} from "../../utils/store/storeSlice/gptSlice";
import { TMDB_MOVIE_SEARCH_URL } from "../../utils/constants/apiURL";
import { API_OPTIONS } from "../../utils/optionsForApi/optionsForAPI";
import GPTSearchPage from "./GPTSearchPage";

const GPTSearchBar = () => {
  const getSearchedMoviesFromStore = useSelector((store) => store.openAIGPT);
  const dispatch = useDispatch();
  const getSearchedDataFromTMDB = (searchedMovieArray) => {
    searchedMovieArray?.forEach((movieName) => {
      fetch(
        TMDB_MOVIE_SEARCH_URL.replace("query=default", `query=${movieName}`),
        API_OPTIONS
      )
        .then((response) => response.json())
        .then((response) => {
          response?.results?.map((movieData) => {
            dispatch(addSearchedMoviesFromTMDB(movieData));
          });
        });
    });
  };
  const getMovieResultFromOpenAI = async () => {
    const gptResult = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `Act as a movie recommendation system and suggest some movies for the query: ${
            document.getElementById("input-search-box-for-openAI-gpt").value
          }, only give me 10 movies, comma-separated like the example result given ahead. Example result: Movie1, movie2, movie3.
          Also, don't give the year of the searched movie`,
        },
      ],
      model: "gpt-3.5-turbo",
    });
    dispatch(
      addSearchedMovies(gptResult?.choices[0]?.message?.content.split(", "))
    );
    getSearchedDataFromTMDB(
      gptResult?.choices[0]?.message?.content.split(", ")
    );
  };

  // const storeMovieResultFromOpenAI = () => {
  //   dispatch(addSearchedMovies(getMovieResultFromOpenAI()));
  //   console.log(getSearchedMoviesFromStore?.searchedResultForMovies);
  //   dispatch(
  //     addSearchedMoviesFromTMDB(
  //       getMovieDetailsFromTMDB(
  //         getSearchedMoviesFromStore?.searchedResultForMovies
  //       )
  //     )
  //   );
  //   console.log(getSearchedMoviesFromStore?.searchedMoviesFromTMDB);
  // };

  return (
    <>
      <div className="absolute my-36 mx-[30%] bg-gradient-to-b from-black">
        <form
          className="p-44 bg-gradient-to-b from-black opacity-80"
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
              getMovieResultFromOpenAI();
            }}
            className="bg-red-700 text-white font-bold text-xl p-2 rounded-lg mt-4 ml-20"
          >
            Search
          </button>
          <button
            className="bg-red-700 text-white p-2 mt-2 ml-14 font-bold text-xl rounded-lg"
            onClick={() => {
              dispatch(clearSearchedData());
            }}
          >
            Clear Search
          </button>
        </form>
      </div>
      <div className="flex overflow-x-scroll bg-gradient-to-b from-black">
        <div className="flex mt-[42%]">
          {getSearchedMoviesFromStore?.searchedMoviesFromTMDB?.map(
            (movieData) => {
              return <GPTSearchPage key={movieData.id} movieData={movieData} />;
            }
          )}
        </div>
      </div>
    </>
  );
};

export default GPTSearchBar;
