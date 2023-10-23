import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearch = () => {
   return (
      <div className="login-page">
         <GptSearchBar></GptSearchBar>
         <GptMovieSuggestions></GptMovieSuggestions>
      </div>
   );
};

export default GptSearch;
