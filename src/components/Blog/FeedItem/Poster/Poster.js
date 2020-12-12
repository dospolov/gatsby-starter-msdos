import React from 'react'

const Poster = ({ posterUrl, alt }) => {
  const posterType = /\.mp4/gi.test(posterUrl) ? 'video' : 'image'
  return (
    <>
      <div
        className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
        aria-hidden="true"
      ></div>
      {posterType === 'image' && (
        <figure className="relative h-0 pb-9/16 md:pb-3/4 lg:pb-9/16 overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
          <img
            className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
            src={posterUrl}
            width="540"
            height="303"
            alt={alt}
          />
        </figure>
      )}

      {posterType === 'video' && (
        <video
          className="relative"
          src={posterUrl}
          preload="auto"
          muted={true}
          title={alt}
          autoPlay={true}
          playsInline={true}
          loop={true}
        />
      )}
    </>
  )
}

export default Poster
