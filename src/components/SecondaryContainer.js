import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
   const nowPlaying = useSelector((store) => store?.movies?.nowPlayingMovies);
   if (!nowPlaying) return;
   const movies = nowPlaying.results;
   return (
      <div>
         <MovieList title="Now Playing" movies={movies}></MovieList>
         <MovieList title="Popular" movies={movies}></MovieList>
         <MovieList title="Trending" movies={movies}></MovieList>
         <MovieList title="Thriller" movies={movies}></MovieList>
         <MovieList title="Horror" movies={movies}></MovieList>
      </div>
   );
};

export default SecondaryContainer;
