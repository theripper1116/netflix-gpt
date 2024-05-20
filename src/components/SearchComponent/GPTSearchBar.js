import openai from "../../utils/openAIHelper";
import { useRef } from "react";

const GPTSearchBar = () => {
  const getSearchText = useRef();
  const getMovieResultFromOpenAI = async (searchText) => {
    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: "Say this is a test" }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResult);
  };
  return (
    <div className="absolute my-48 mx-[30%]">
      <form
        className="bg-black p-44 bg-gradient-to-b from-black opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={getSearchText}
          className="p-5 ml-2 rounded-xl text-white bg-black opacity-70 border border-red-700"
          type="text"
          placeholder="Search for a Show/Movies"
        ></input>
        <button
          onClick={() => {
            getMovieResultFromOpenAI(getSearchText.current.value);
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
