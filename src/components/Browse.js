import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPopoularMovies from "../hooks/useNowPopoularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
   const gptToggle = useSelector((store) => store?.gpt?.showGptSearch);
   useNowPlayingMovies();
   useNowPopoularMovies();

   return (
      <div className="max-sm:bg-black max-md:bg-black">
         <Header></Header>
         {gptToggle ? (
            <GptSearch></GptSearch>
         ) : (
            <>
               <MainContainer></MainContainer>
               <SecondaryContainer></SecondaryContainer>
            </>
         )}
      </div>
   );
};

export default Browse;
