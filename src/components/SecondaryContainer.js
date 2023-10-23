import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
   const movies = useSelector((store) => store?.movies);
   const nowPlaying = movies?.nowPlayingMovies;
   const popularMovies = movies?.popularMovies;
   if (!nowPlaying) return;
   const now_playing_movies = nowPlaying?.results;
   const popular_movies = popularMovies?.results;
   return (
      <div className="bg-black">
         <div className="-mt-56 max-sm:-mt-16 max-lg:-mt-16">
            <MovieList
               title="Now Playing"
               movies={now_playing_movies}
            ></MovieList>
            <MovieList title="Popular" movies={popular_movies}></MovieList>
            <MovieList
               title="Top Rated"
               movies={now_playing_movies}
            ></MovieList>
            <MovieList title="Thriller" movies={now_playing_movies}></MovieList>
            <MovieList title="Horror" movies={now_playing_movies}></MovieList>
         </div>
      </div>
   );
};

export default SecondaryContainer;
