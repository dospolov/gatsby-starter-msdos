import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Post from '../components/Post'

const PageTemplate = ({ data }) => {
  // const { html: pageBody } = data.markdownRemark

  return (
    <Layout
      title={data.markdownRemark.frontmatter.title}
      image={data.markdownRemark.frontmatter.poster}
    >
      <Post data={data} />
    </Layout>
  )
}

export const query = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        slug
        posterUrl
        date
        description
        tags
        title
      }
    }
  }
`

export default PageTemplate
