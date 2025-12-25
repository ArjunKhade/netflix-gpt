import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video' >
       <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
       <p className='py-6 text-lg w-1/3 hidden md:inline-block'>{overview}</p>
       <div className='mt-2 md:mt-0'>
          <button className='bg-white hover:bg-opacity-80 rounded-lg py-0 md:py-4 px-1 md:px-12 text-xl text-black'> Play</button>
          <button className='bg-gray-500 mx-2 hidden md:inline-block hover:bg-opacity-80 bg-opacity-50 rounded-lg py-4 px-12 text-xl text-white'>More Info</button>
       </div>
    </div>
  )
}

export default VideoTitle