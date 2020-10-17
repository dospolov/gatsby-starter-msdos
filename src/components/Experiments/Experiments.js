import React from 'react'
import { useSiteMetadata } from '../../hooks'

const Experiments = () => {
  const {
    cv: { experiments, tech }
  } = useSiteMetadata()
  return (
    <>
      <div className="flex mt-16">
        {experiments.map((experiment, i) => (
          <div className="pl-5 w-2/6 bg-purple-900 m-2 p-4" key={i}>
            <h4 className="mb-0 text-lg flex">
              <a
                href={experiment.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex align-middle"
              >
                <span className="inline-flex mr-3">{experiment.name}</span>
                <img
                  src={`/logos/${experiment.locationIcon}`}
                  alt=""
                  className="m-2 ml-0 w-4 inline-flex"
                />
              </a>
              {experiment.sourceCode && (
                <a
                  href={experiment.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex m-2 ml-0 w-4 align-middle"
                >
                  <img src="/logos/github.svg" alt="Source code" className="" />
                </a>
              )}
            </h4>
            <div className="text-purple-400">{experiment.description}</div>
            <p className="pt-2 mb-1 flex">
              {experiment.builtWith.map(techName => {
                const { website, logo, name } = tech.find(
                  techItem => techItem.name === techName
                )
                return (
                  <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={techName}
                    className="p-1 inline-flex"
                  >
                    <img
                      src={`/cv/tech/${logo}`}
                      alt={name}
                      title={name}
                      className="w-8 align-middle"
                    />
                  </a>
                )
              })}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Experiments
