import React from "react";
import { TMDB_IMAGE_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img src={TMDB_IMAGE_CDN_URL + posterPath} alt="poster"></img>
    </div>
  );
};

export default MovieCard;
