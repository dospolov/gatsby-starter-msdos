import React from 'react'
import Tags from '../components/Tags'
import CtaBackground from '../components/Illustrations/CtaBackground'
import Poster from '../components/Poster'
import BlogLink from '../components/BlogLink'

const BlogListFeaturedItem = ({
  edge: {
    node: {
      frontmatter: { description, poster, slug, tags, title, featured }
    }
  }
}) => {
  const itemClassList = poster
    ? 'max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center'
    : 'max-w-sm mx-auto md:max-w-none grid items-center'

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
      <section>
        <div className="max-w-6xl mx-auto">
          {/* CTA box */}
          <div className="relative bg-purple-600 py-10 px-8 md:py-16 md:px-12">
            {/* Background illustration */}
            <div
              className="absolute right-0 top-0 -ml-40 pointer-events-none"
              aria-hidden="true"
            >
              <CtaBackground />
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">
              <article className={itemClassList}>
                {poster && (
                  <BlogLink {...{ externalLink, link }} className="relative block group">
                    <Poster {...{ poster }} />
                  </BlogLink>
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
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogListFeaturedItem
