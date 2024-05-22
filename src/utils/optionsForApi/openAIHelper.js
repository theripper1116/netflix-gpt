import OpenAI from "openai";
const { REACT_APP_OPENAI_KEY } = process.env;

const openai = new OpenAI({
  apiKey: REACT_APP_OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai;
