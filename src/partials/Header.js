import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'gatsby'
import { useSiteMetadata } from '../hooks'

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const {
    cv: {
      generalInfo: { name, position, photo }
    }
  } = useSiteMetadata()

  const mobileNav = useRef(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNavOpen || mobileNav.current.contains(target)) return
      setMobileNavOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return
      setMobileNavOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <header className="max-w-6xl mx-auto p-4 sm:p-6 relative">
      <div className="flex justify-between">
        <div className="flex">
          <div className="w-10 mr-3">
            <img
              src={photo}
              alt={name}
              width={40}
              height={40}
              className="rounded-full inline-block"
            />
          </div>
          <div className="pt-2 mr-16">
            {name} | {position}
          </div>
        </div>

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
                to="/cv"
                className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                activeClassName="border-b-2 border-purple-600"
              >
                CV
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* <div className="">
        <div className="">
          <nav className="">
            <div className="">
              <div className="">
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
            </div>
            <ul className="hidden items-center">
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
                  to="/cv"
                  className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                  activeClassName="border-b-2 border-purple-600"
                >
                  CV
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div> */}
    </header>
  )
}

export default Header
