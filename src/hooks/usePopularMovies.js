import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_Options } from "../utils/constant";
import { addPopularMovie } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    popularMovies();
  }, []);

  const popularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_Options
    );
    const json = await data.json();
    dispatch(addPopularMovie(json.results));
  };
};

export default usePopularMovies;
