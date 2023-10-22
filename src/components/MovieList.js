import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
   return (
      <div className="p-1">
         <h1 className="m-2 text-3xl font-bold py-4">{title}</h1>
         <div className="flex overflow-x-scroll">
            <div className="flex">
               {movies?.map((el) => (
                  <MovieCard key={el.key} movie={el}></MovieCard>
               ))}
            </div>
         </div>
      </div>
   );
};

export default MovieList;
