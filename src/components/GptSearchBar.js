/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import openai from "../utils/openai";
const GptSearchBar = () => {
   const handleGptSearchClick = async () => {
      console.log("Search text ", searchText.current.value);
      //   Make call to Open API to get movie results
      const chatCompletion = await openai.chat.completions.create({
         messages: [
            {
               role: "user",
               content: `Act as a movie recommendation system and suggest some best movies for this query.The query is "${searchText.current.value}". And only give me list of 5 movies in comma separated format and no extra details. For example: Baywatch,Spider Man,The Kashmir files. The query is: Best movies in 2021`,
            },
         ],
         model: "gpt-3.5-turbo",
      });

      console.log(chatCompletion.choices);
   };
   const searchText = useRef();
   return (
      <div className="pt-24 flex justify-center  max-sm:pt-36">
         <form
            className="p-2 bg-black rounded-md w-1/2 flex justify-between max-sm:flex-col max-sm:items-center max-sm:w-full"
            onSubmit={(e) => e.preventDefault()}
         >
            <input
               type="text"
               className="p-2 m-4 w-8/12 rounded-md"
               placeholder="What would you like to watch today?"
               ref={searchText}
            ></input>
            <button
               className="bg-red-600 font-bold text-white rounded-lg p-2 my-4 w-3/12 max-sm:w-1/2"
               //    onClick={handleGptSearchClick}
            >
               Search
            </button>
         </form>
      </div>
   );
};

export default GptSearchBar;
