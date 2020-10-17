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
            <div className="text-center my-1 w-1/8" key={techName}>
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center p-1"
              >
                <img
                  src={`/cv/tech/${logo}`}
                  alt={name}
                  className="h-8 mb-2 items-center inline-block"
                />
                <h5>{name}</h5>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TopTech
