import React from 'react'
import { Tags, AuthorAndDate, CtaBackground } from '../../shared'
import Poster from './Poster'
import BlogLink from './BlogLink'

const ItemWrapper = props => {
  const { featured, ...allProps } = props

  return featured ? (
    <section>
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-purple-600 py-10 px-8 md:py-16 md:px-12">
          <div
            className="absolute right-0 top-0 -ml-40 pointer-events-none"
            aria-hidden="true"
          >
            <CtaBackground />
          </div>

          <div className="relative flex flex-col lg:flex-row justify-between items-center">
            <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
              {allProps.children}
            </article>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
      {allProps.children}
    </article>
  )
}

const FeedItem = ({
  edge: {
    node: {
      frontmatter: { description, date, posterUrl, slug, tags, title }
    }
  },
  featured
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
      <ItemWrapper {...{ featured }}>
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
              <Tags {...{ tags, featured }} />
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
          {featured || (
            <footer className="flex items-center mt-4">
              <AuthorAndDate {...{ date }} />
            </footer>
          )}
        </div>
      </ItemWrapper>
    </div>
  )
}

export default FeedItem
