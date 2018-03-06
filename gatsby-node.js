const path = require('path')

const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  // Make 'slug' for all posts
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({node, getNode})
    createNodeField({
      name: `slug`,
      node,
      value
    })
  }
}

// Create post and tag pages
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const PostTemplate = path.resolve(`src/templates/postTemplate.js`)
  const tagTemplate = path.resolve(`src/templates/tagPageTemplate.js`)

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
            title
          }
        }
      }
    }
    }`).then(result => {
      if (result.errors) {
        return Promise.reject(result.errors)
      }

      const posts = result.data.allMarkdownRemark.edges
      let tags = []

      posts.forEach((edge, index) => {
        const prev = index === 0 ? false : posts[index - 1]
        const next = index === posts.length - 1 ? false : posts[index + 1]
        createPage({
          path: edge.node.frontmatter.path,
          component: PostTemplate,
          context: {
            prev,
            next
          }
        })
        if (edge.node.frontmatter.tags) {
          tags = tags.concat(edge.node.frontmatter.tags)
        }
      })

      // Remove duplicate tags
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
