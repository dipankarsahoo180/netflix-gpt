import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
   const movies = useSelector((store) => store.movies?.nowPlayingMovies);
   if (!movies) return;
   const mainMovie = movies?.results[0];
   return (
      <div>
         <VideoTitle
            title={mainMovie.original_title}
            overview={
               mainMovie.overview?.length < 100
                  ? mainMovie.overview
                  : mainMovie.overview?.slice(0, 100)
            }
         ></VideoTitle>
         <VideoBackground movieId={mainMovie?.id}></VideoBackground>
      </div>
   );
};

export default MainContainer;
