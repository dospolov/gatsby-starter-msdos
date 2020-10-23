import React from 'react'
import BlogListItem from './BlogListItem'
import BlogListFeaturedItem from './BlogListFeaturedItem'

function BlogList({ edges }) {
  console.log(edges)
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32">
          {edges
            .filter(edge => edge?.node?.frontmatter?.featured === true)
            .map(edge => (
              <BlogListFeaturedItem edge={edge} key={edge.node.frontmatter.slug} />
            ))}
          {edges
            .filter(edge => edge?.node?.frontmatter?.featured !== true)
            .map(edge => (
              <BlogListItem edge={edge} key={edge.node.frontmatter.slug} />
            ))}
        </div>
      </div>
    </section>
  )
}

export default BlogList
