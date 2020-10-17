import React from 'react'
import BlogListItem from './BlogListItem'

function BlogList({ edges }) {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {edges.map(edge => (
            <BlogListItem edge={edge} key={edge.node.frontmatter.slug} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogList
