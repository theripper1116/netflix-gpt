import { useDispatch, useSelector } from "react-redux";

import openai from "../../utils/optionsForApi/openAIHelper";
import { addSearchedMovies } from "../../utils/store/storeSlice/gptSlice";
import { TMDB_MOVIE_SEARCH_URL } from "../../utils/Constants/apiURL";
import { API_OPTIONS } from "../../utils/optionsForApi/optionsForAPI";

const GPTSearchBar = () => {
  const getSearchedMoviesFromStore = useSelector(
    (store) => store.openAIGPT.searchedResultForMovies
  );
  const dispatch = useDispatch();
  const getSearchedDataFromTMDB = () => {
    if (!getSearchedMoviesFromStore) return;
    getSearchedMoviesFromStore.forEach((movieName) => {
      fetch(
        TMDB_MOVIE_SEARCH_URL.replace("query=default", `query=${movieName}`),
        API_OPTIONS
      )
        .then((response) => response.json())
        .then((response) => console.log(response));
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
    getSearchedDataFromTMDB();
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
            getMovieResultFromOpenAI();
          }}
          className="bg-red-700 text-white font-bold text-xl p-2 rounded-lg mt-4 ml-20"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
