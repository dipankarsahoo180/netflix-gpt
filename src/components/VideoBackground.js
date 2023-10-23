/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
   useMovieTrailer(movieId);
   const trailer = useSelector((store) => store.movies.trailerVideo);

   return (
      <div>
         <iframe
            className="w-screen aspect-video max-sm:mb-80"
            src={`https://www.youtube.com/embed/${trailer?.key}?&autoplay=1&mute=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
         ></iframe>
      </div>
   );
};

export default VideoBackground;
