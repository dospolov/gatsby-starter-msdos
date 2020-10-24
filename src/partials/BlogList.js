import React from 'react'
import BlogListItem from './BlogListItem'

function BlogList({ edges }) {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="">
          {edges
            .filter(edge => edge?.node?.frontmatter?.featured === true)
            .map(edge => (
              <BlogListItem
                edge={edge}
                key={edge.node.frontmatter.slug}
                featured={true}
              />
            ))}
          {edges
            .filter(edge => edge?.node?.frontmatter?.featured !== true)
            .map(edge => (
              <BlogListItem
                edge={edge}
                key={edge.node.frontmatter.slug}
                featured={false}
              />
            ))}
        </div>
      </div>
    </section>
  )
}

export default BlogList
