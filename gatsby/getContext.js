const PostSlugsQuery = require('./queries/postSlugs')
const PageSlugsQuery = require('./queries/pageSlugs')

const getContext = async graphql => {
  const getSlugs = async query => {
    const {
      data: {
        allMarkdownRemark: { edges }
      }
    } = await graphql(query)

    return edges.map(
      ({
        node: {
          frontmatter: { slug }
        }
      }) => slug
    )
  }

  return {
    pageSlugs: await getSlugs(PageSlugsQuery),
    postSlugs: await getSlugs(PostSlugsQuery)
  }
}

module.exports = getContext
