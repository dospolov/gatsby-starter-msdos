import React from 'react'
import { Link } from 'gatsby'
import { useSiteMetadata } from '../hooks'

function Header() {
  const {
    cv: {
      generalInfo: { name, position, photo }
    }
  } = useSiteMetadata()

  return (
    <header className="max-w-6xl mx-auto p-4 sm:p-6 relative">
      <div className="flex justify-between">
        <Link to="/" className="flex mr-8 sm:mr-16">
          <div className="w-10 mr-3">
            <img
              src={photo}
              alt={name}
              width={40}
              height={40}
              className="rounded-full inline-block"
            />
          </div>
          <div className="pt-2">
            {name} | {position}
          </div>
        </Link>

        <nav>
          <ul className="flex flex-grow justify-end items-center">
            <li>
              <Link
                to="/"
                className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                activeClassName="border-b-2 border-purple-600"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/cv-maker"
                className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                activeClassName="border-b-2 border-purple-600"
              >
                CV
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
