import openai from "../optionsForApi/openAIHelper";

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
  return gptResult?.choices[0]?.message?.content.split(", ");
};

export default getMovieResultFromOpenAI;
