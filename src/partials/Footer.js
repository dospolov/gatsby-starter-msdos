import React from 'react'
import { Facebook, Linkedin, Twitter } from '../components/Icon'
import { useSiteMetadata } from '../hooks'

function Footer() {
  const {
    author: {
      contacts: { twitter, linkedin, facebook }
    }
  } = useSiteMetadata()

  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">
            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <a
                  href={`https://www.twitter.com/${twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter />
                </a>
              </li>
              <li className="ml-4">
                <a
                  href={`https://fb.com/${facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook />
                </a>
              </li>
              <li className="ml-4">
                <a
                  href={`https://www.linkedin.com/in/${linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Linkedin"
                >
                  <Linkedin />
                </a>
              </li>
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">&copy; 2020 dospolov.com</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
