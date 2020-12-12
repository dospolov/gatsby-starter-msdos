import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Blog from '../components/Blog'

const BlogTemplate = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <Layout title="Blog">
      <Blog edges={edges} />
    </Layout>
  )
}

export const query = graphql`
  query BlogTemplate {
    allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          html
          frontmatter {
            slug
            title
            posterUrl
            date
            tags
            description
            featured
          }
        }
      }
    }
  }
`

export default BlogTemplate
