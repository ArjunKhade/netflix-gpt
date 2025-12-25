import React, { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 400; // Adjust scroll amount as needed
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 400; // Adjust scroll amount as needed
    }
  };

  return (
    <div className="px-2 relative">
      <h1 className="py-4 text-lg md:text-2xl text-white">{title}</h1>
      <div className="relative">
        <button onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full z-10 hover:bg-opacity-75">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div ref={scrollRef} className="flex overflow-x-hidden scroll-smooth">
          <div className="flex">
            {movies &&
              movies.map((movie) => (
                <MovieCard key={movie.id} posterPath={movie?.poster_path} />
              ))}
          </div>
        </div>
        <button onClick={scrollRight} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full z-10 hover:bg-opacity-75">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MovieList;
