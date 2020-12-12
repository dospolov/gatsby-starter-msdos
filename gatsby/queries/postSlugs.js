const PostSlugsQuery = `
{
  allMarkdownRemark(
    filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
  ) {
    edges {
      node {
        frontmatter {
          slug
        }
      }
    }
  }
}
`

module.exports = PostSlugsQuery
