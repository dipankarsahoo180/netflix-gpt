import React from "react";
import { IMAGE_CDN } from "../utils/constants";
const MovieCard = ({ movie }) => {
   return (
      <div className="w-44 m-2">
         <img src={IMAGE_CDN + movie?.poster_path} alt="poster"></img>
      </div>
   );
};

export default MovieCard;
