import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import MovieSuggestion from './MovieSuggestion'
import { BGURL } from '../utils/constant'

const GptSearch = () => {
  return (
    <>
    <div className="fixed -z-10">
        <img className='h-screen w-screen object-cover'
          src={BGURL}
          alt="background"
        />
      </div>
    <div className=''>
      <GPTSearchBar></GPTSearchBar>
      <MovieSuggestion></MovieSuggestion>
      </div>
    </>
  )
}

export default GptSearch