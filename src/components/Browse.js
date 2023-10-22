import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPopoularMovies from "../hooks/useNowPopoularMovies";
const Browse = () => {
   useNowPlayingMovies();
   useNowPopoularMovies();
   return (
      <div>
         <Header></Header>
         <MainContainer></MainContainer>
         <SecondaryContainer></SecondaryContainer>
      </div>
   );
};

export default Browse;
