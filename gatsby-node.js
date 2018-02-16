const path = require('path')

const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({node, getNode})
    createNodeField({
      name: `slug`,
      node,
      value
    })
  }
}

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const PostTemplate = path.resolve(`src/templates/post.js`)
  const tagTemplate = path.resolve(`src/templates/tags.js`)

  return graphql(`{
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 2000
    ) {
      edges {
        node {
          frontmatter {
            path
            tags
          }
        }
      }
    }
    }`).then(result => {
      if (result.errors) {
        return Promise.reject(result.errors)
      }

      const posts = result.data.allMarkdownRemark.edges

      posts.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: PostTemplate,
          context: {}
        })
      })

      let tags = []

      posts.forEach(edge => {
        if (edge.node.frontmatter.tags) {
          tags = tags.concat(edge.node.frontmatter.tags)
        }
      })

      tags = [...new Set(tags)]

      tags.forEach(tag => {
        createPage({
          path: `/tags/${tag}/`,
          component: tagTemplate,
          context: {
            tag
          }
        })
      })
    })
}
