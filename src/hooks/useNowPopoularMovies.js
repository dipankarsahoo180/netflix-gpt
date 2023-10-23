/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const useNowPopoularMovies = () => {
   const popularmovies = useSelector((store) => store?.movies?.popularMovies);
   const dispatch = useDispatch();
   const getPopularMovies = async () => {
      const data = await fetch(
         "https://api.themoviedb.org/3/movie/popular",
         API_OPTIONS
      );
      const json = await data.json();
      dispatch(addPopularMovies(json));
   };

   useEffect(() => {
      !popularmovies && getPopularMovies();
   }, []);
};

export default useNowPopoularMovies;
