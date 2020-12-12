const PageSlugsQuery = `
{
  allMarkdownRemark(
    filter: { frontmatter: { template: { eq: "page" }, draft: { ne: true } } }
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

module.exports = PageSlugsQuery
