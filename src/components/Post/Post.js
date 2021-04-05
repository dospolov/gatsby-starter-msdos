import React from 'react'
import { Tags, AuthorAndDate } from '../shared'
import Comments from './Comments'

const Post = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { date, description, posterUrl, slug, tags, title }
    }
  }
}) => {
  return (
    <>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-10">
            <div className="max-w-3xl mx-auto">
              <article>
                <div className="text-center md:text-left mb-8">
                  <h1 className="h1 mb-4">{title}</h1>
                  <p className="text-2xl text-gray-400">{description}</p>
                </div>

                <div
                  className="post-content text-lg text-gray-400"
                  dangerouslySetInnerHTML={{ __html: html }}
                />

                <footer className="mb-8">
                  {/* Title and excerpt */}
                  {/* Article meta */}
                  <div className="md:flex md:items-center md:justify-between mt-3">
                    {/* Author meta */}
                    <div className="flex items-center justify-center">
                      <AuthorAndDate {...{ date }} />
                    </div>
                    {/* Article tags */}
                    <div className="flex justify-center mt-4 md:mt-0">
                      <Tags {...{ tags }} />
                    </div>
                  </div>
                </footer>
              </article>
            </div>
          </div>
        </div>
      </section>
      <div className="mb-10 w-4/5 mx-auto">
        <Comments postSlug={slug} postTitle={title} />
      </div>
      <div className="mb-10 w-4/5 mx-auto">
        <div id="disqus_recommendations"></div>
      </div>
    </>
  )
}

export default Post
