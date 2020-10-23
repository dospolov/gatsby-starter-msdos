import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import BlogList from '../partials/BlogList'

const BlogTemplate = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <Layout title="Blog">
      <BlogList edges={edges} />
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
            poster
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
