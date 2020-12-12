const path = require('path')
const getContext = require('./getContext')

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { pageSlugs, postSlugs } = await getContext(graphql)

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

  pageSlugs.map(slug =>
    createPage({
      path: slug,
      component: path.resolve('./src/templates/page-template.js'),
      context: { slug }
    })
  )

  postSlugs.map(slug =>
    createPage({
      path: slug,
      component: path.resolve('./src/templates/post-template.js'),
      context: { slug }
    })
  )
}

module.exports = createPages
