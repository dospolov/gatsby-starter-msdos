const path = require('path')

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  createPage({
    path: '/',
    component: path.resolve('./src/templates/blog-template.js')
  })

  createPage({
    path: '/404',
    component: path.resolve('./src/templates/not-found-template.js')
  })

  createPage({
    path: '/cv',
    component: path.resolve('./src/templates/cv-template.js')
  })

  // // Posts and pages from markdown
  const result = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { draft: { ne: true } } }) {
        edges {
          node {
            frontmatter {
              template
              slug
            }
          }
        }
      }
    }
  `)

  const { edges } = result.data.allMarkdownRemark

  edges.map(edge => {
    if (edge?.node?.frontmatter?.template === 'page') {
      createPage({
        path: edge.node.frontmatter.slug,
        component: path.resolve('./src/templates/page-template.js'),
        context: { slug: edge.node.frontmatter.slug }
      })
    } else if (edge?.node?.frontmatter?.template === 'post') {
      createPage({
        path: edge.node.frontmatter.slug,
        component: path.resolve('./src/templates/post-template.js'),
        context: { slug: edge.node.frontmatter.slug }
      })
    }
    return null
  })
}

module.exports = createPages
