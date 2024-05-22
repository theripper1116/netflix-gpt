// import { useEffect } from "react";
// import { useDispatch } from "react-redux";

// import openai from "../optionsForApi/openAIHelper";
// import { addSearchedMovies } from "../store/storeSlice/gptSlice";

// export const useGetSearchedMovieFromOpenAI = (movieNameToSearchFor) => {
//   const dispatch = useDispatch();
//   const getSearchedMovieFromOpenAI = async () => {
//     const gptResult = await openai.chat.completions.create({
//       messages: [
//         {
//           role: "user",
//           content: `Act as a movie recommendation system and suggest some movies for the query: ${movieNameToSearchFor}, only give me 10 movies, comma-separated like the example result given ahead. Example result: Movie1, movie2, movie3.
//             Also, don't give the year of the searched movie`,
//         },
//       ],
//       model: "gpt-3.5-turbo",
//     });
//     dispatch(
//       addSearchedMovies(gptResult?.choices[0]?.message?.content.split(", "))
//     );
//   };

//   useEffect(() => {
//     getSearchedMovieFromOpenAI();
//   }, []);
// };

// export default useGetSearchedMovieFromOpenAI;
