import OpenAI from "openai";

const openai = new OpenAI({
   apiKey: process.env.REACT_APP_TMDB_KEY, // defaults to process.env["OPENAI_API_KEY"] //REACT_APP_ prefix is mandatory for react to understand API
   dangerouslyAllowBrowser: true,
});

export default openai;
