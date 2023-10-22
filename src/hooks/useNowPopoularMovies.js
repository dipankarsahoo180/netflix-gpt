/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const useNowPopoularMovies = () => {
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
      getPopularMovies();
   }, []);
};

export default useNowPopoularMovies;
