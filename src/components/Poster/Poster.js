import React from 'react'

const Poster = ({ poster }) => (
  <>
    <div
      className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
      aria-hidden="true"
    ></div>
    <figure className="relative h-0 pb-9/16 md:pb-3/4 lg:pb-9/16 overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
      <img
        className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
        src={poster}
        width="540"
        height="303"
        alt="Blog post 01"
      />
    </figure>
  </>
)

export default Poster
