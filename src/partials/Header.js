import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'gatsby'

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

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
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Desktop navigation */}
          <nav className="flex flex-grow">
            {/* Desktop menu links */}
            <ul className="flex flex-grow justify-end flex-wrap items-center">
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
      </div>
    </header>
  )
}

export default Header
