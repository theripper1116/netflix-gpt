import { TMDB_MOVIE_SEARCH_URL } from "../Constants/apiURL";
import { API_OPTIONS } from "../optionsForApi/optionsForAPI";

const getMovieDetailsFromTMDB = async (movieName) => {
  let movieArray = [];
  movieName?.forEach((movieName) => {
    fetch(
      TMDB_MOVIE_SEARCH_URL.replace("query=default", `query=${movieName}`),
      API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        response?.results?.map((movieData) => {
          movieArray.push(movieData);
        });
      });
  });
  if(movieArray.length !== 0) return movieArray
  else return "Data Not Fetched";
};

export default getMovieDetailsFromTMDB;
