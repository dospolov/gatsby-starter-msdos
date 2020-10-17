import React from 'react'
import { Link } from 'gatsby'
import Tags from '../components/Tags'
import AuthorAndDate from '../components/AuthorAndDate'

const BlogListItem = ({
  edge: {
    node: {
      frontmatter: { description, date, poster, slug, tags, title }
    }
  }
}) => {
  return (
    <div className="pb-12 md:pb-20">
      <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
        <Link
          to={slug}
          className="relative block group"
          data-aos="fade-right"
          data-aos-delay="200"
        >
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
        </Link>
        <div data-aos="fade-left" data-aos-delay="200">
          <header>
            <div className="mb-3">
              <Tags {...{ tags }} />
            </div>
            <h3 className="h3 text-2xl lg:text-3xl mb-2">
              <Link
                to={slug}
                className="hover:text-gray-100 transition duration-150 ease-in-out"
              >
                {title}
              </Link>
            </h3>
          </header>
          <p className="text-lg text-gray-400 flex-grow">{description}</p>
          <footer className="flex items-center mt-4">
            <AuthorAndDate {...{ date }} />
          </footer>
        </div>
      </article>
    </div>
  )
}

export default BlogListItem
