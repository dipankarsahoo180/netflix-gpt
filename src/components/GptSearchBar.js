import React from "react";

const GptSearchBar = () => {
   return (
      <div className="pt-24 flex justify-center">
         <form className="p-2 bg-black rounded-md w-1/2 flex justify-between">
            <input
               type="text"
               className="p-2 m-4 w-8/12 rounded-md"
               placeholder="What would you like to watch today?"
            ></input>
            <button className="bg-red-600 font-bold text-white rounded-lg p-2 my-4 w-3/12">
               Search
            </button>
         </form>
      </div>
   );
};

export default GptSearchBar;
