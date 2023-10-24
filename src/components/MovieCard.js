import React from "react";
import { IMAGE_CDN } from "../utils/constants";
const MovieCard = ({ movie }) => {
   if(!movie?.poster_path) return
   return (
      <div className="w-44 m-2 cursor-pointer">
         <img src={IMAGE_CDN + movie?.poster_path} alt="poster"></img>
      </div>
   );
};

export default MovieCard;
