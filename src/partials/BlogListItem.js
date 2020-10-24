import React from 'react'
import Tags from '../components/Tags'
import AuthorAndDate from '../components/AuthorAndDate'
import Poster from '../components/Poster'
import BlogLink from '../components/BlogLink'

const BlogListItem = ({
  edge: {
    node: {
      frontmatter: { description, date, posterUrl, slug, tags, title }
    }
  }
}) => {
  let link = slug
  let externalLink = false
  const isTitleLinkPattern = /(?=.*\[)(?=.*\])(?=.*\()(?=.*\))/i
  if (isTitleLinkPattern.test(title)) {
    const found = title.match(/\[(.*)]\((.*)\)/)
    title = found[1]
    link = found[2]
    externalLink = true
  }

  return (
    <div className="pb-12 md:pb-20">
      <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
        {posterUrl ? (
          <BlogLink {...{ externalLink, link }} className="relative block group">
            <Poster {...{ posterUrl, alt: title }} />
          </BlogLink>
        ) : (
          <div></div>
        )}
        <div>
          <header>
            <div className="mb-3">
              <Tags {...{ tags }} />
            </div>
            <h3 className="h3 text-2xl lg:text-3xl mb-2">
              <BlogLink
                {...{ externalLink, link }}
                className="hover:text-gray-100 transition duration-150 ease-in-out"
              >
                {title}
              </BlogLink>
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
