import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    console.log(movies)
  return (
    <div className='px-2 '>
            <h1 className='  py-4 text-2xl text-white'>{title}</h1>
        <div className='flex overflow-x-scroll'>
            <div className='flex'>
                { movies &&
                    movies.map((movie) => 
                        <MovieCard key={movie.id} posterPath={movie?.poster_path} ></MovieCard>
                    )
                }
            </div>
        </div>
        
        </div>
  )
}

export default MovieList