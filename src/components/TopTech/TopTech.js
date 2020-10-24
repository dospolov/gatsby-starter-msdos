import React from 'react'
import { useSiteMetadata } from '../../hooks'

const TopTech = () => {
  const {
    cv: { topTech, tech }
  } = useSiteMetadata()
  return (
    <div className="mt-10 mb-5">
      <div className="flex">
        {topTech.map(techName => {
          const { website, logo, name } = tech.find(
            techItem => techItem.name === techName
          )
          return (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center p-1 my-1 w-1/8"
              key={techName}
            >
              <img
                src={`/cv/tech/${logo}`}
                alt={name}
                className="h-8 mb-2 items-center inline-block"
              />
              <h5 className="whitespace-pre hidden md:block">{name}</h5>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default TopTech
