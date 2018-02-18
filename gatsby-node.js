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
            type
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

      /*
        The code here is very redundant, but it's the best way I've found to
        seperate the Blog and Project pages. I'm sure there are better ways,
        and I'll refactor this as soon as I find one.
      */

      const blogPosts = []
      const projectPosts = []
      let tags = []

      // Funnel each edge to it's container
      posts.forEach((edge) => {
        if (edge.node.frontmatter.type === 'post') {
          blogPosts.push(edge.node)
        } else if (edge.node.frontmatter.type === 'project') {
          projectPosts.push(edge.node)
        }

        if (edge.node.frontmatter.tags) {
          tags = tags.concat(edge.node.frontmatter.tags)
        }
      })

      // Remove duplicate tags
      tags = [...new Set(tags)]

      blogPosts.forEach((node, index) => {
        const prev = index === 0 ? false : blogPosts[index - 1]
        const next = index === blogPosts.length - 1 ? false : blogPosts[index + 1]
        createPage({
          path: node.frontmatter.path,
          component: PostTemplate,
          context: {
            prev,
            next
          }
        })
      })

      projectPosts.forEach((node, index) => {
        const prev = index === 0 ? false : projectPosts[index - 1]
        const next = index === projectPosts.length - 1 ? false : projectPosts[index + 1]
        createPage({
          path: node.frontmatter.path,
          component: PostTemplate,
          context: {
            prev,
            next
          }
        })
      })

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
