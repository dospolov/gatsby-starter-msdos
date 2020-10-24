import React from 'react'
import Tags from '../Tags'
import AuthorAndDate from '../AuthorAndDate'

const Post = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { date, description, posterUrl, slug, tags, title }
    }
  }
}) => {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-20 pb-12 md:pb-20">
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
  )
}

export default Post
