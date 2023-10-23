/* eslint-disable react-hooks/exhaustive-deps */
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
   const dispatch = useDispatch();
   const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);
   const getMovieTrailer = async () => {
      const data = await fetch(
         `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
         API_OPTIONS
      );
      const video_json = await data.json();
      const result = video_json?.results?.find(
         (el) => el.type === "Trailer" && el.site === "YouTube"
      );
      dispatch(addTrailerVideo(result));
      return result;
   };

   useEffect(() => {
      !trailerVideo && getMovieTrailer();
   }, []);
};

export default useMovieTrailer;
