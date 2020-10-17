import React from 'react'
import { Link } from 'gatsby'
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share'
import Tags from '../Tags'
import AuthorAndDate from '../AuthorAndDate'
import { Facebook, Linkedin, Twitter } from '../Icon'
import { useSiteMetadata } from '../../hooks'

const Post = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { date, description, poster, slug, tags, title }
    }
  }
}) => {
  const { url } = useSiteMetadata()
  const urlToShare = `${url}${slug}`

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto">
            <article>
              <header className="mb-8">
                {/* Title and excerpt */}
                <div className="text-center md:text-left">
                  <h1 className="h1 mb-4" data-aos="fade-up">
                    {title}
                  </h1>
                  <p
                    className="text-xl text-gray-400"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    {description}
                  </p>
                </div>
                {/* Article meta */}
                <div className="md:flex md:items-center md:justify-between mt-3">
                  {/* Author meta */}
                  <div
                    className="flex items-center justify-center"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <AuthorAndDate {...{ date }} />
                  </div>
                  {/* Article tags */}
                  <div
                    className="flex justify-center mt-4 md:mt-0"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <Tags {...{ tags }} />
                  </div>
                </div>
              </header>

              {/* Article image */}
              {poster && (
                <figure
                  className="mb-8 lg:-ml-32 lg:-mr-32"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <img
                    className="w-full"
                    src={poster}
                    width="1024"
                    height="576"
                    alt="Article poster"
                  />
                </figure>
              )}

              <div
                className="post-content text-lg text-gray-400"
                dangerouslySetInnerHTML={{ __html: html }}
              />

              {/* Article footer */}
              <footer>
                <div className="md:flex md:items-center md:justify-between text-center md:text-left">
                  <div className="text-lg text-gray-400 italic">
                    Originally published at{' '}
                    <Link to="https://dospolov.com/" className="text-gray-200">
                      https://dospolov.com/
                    </Link>
                    .
                  </div>
                  <ul className="inline-flex mt-4 md:ml-4 md:mb-0">
                    <li>
                      <TwitterShareButton url={urlToShare} title={title}>
                        <Twitter />
                      </TwitterShareButton>
                    </li>
                    <li className="ml-4">
                      <FacebookShareButton url={urlToShare} title={title}>
                        <Facebook />
                      </FacebookShareButton>
                    </li>
                    <li className="ml-4">
                      <LinkedinShareButton url={urlToShare} title={title}>
                        <Linkedin />
                      </LinkedinShareButton>
                    </li>
                  </ul>
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
