import Link from 'gatsby-link'
import React from 'react'

const ProjectPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div
      className='project-page'
      css={{
        padding: '3rem 1rem 3rem 1rem',
        width: '100%',
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
      }}
    >
      <h1
        css={{
          borderBottom: '2px groove black'
        }}
      >
        Things I Built
      </h1>
      {
        posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div
                css={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderBottom: '2px groove black'
                }}
              >
                <Link to={post.frontmatter.path}>
                  <h2>{post.frontmatter.title}</h2>
                </Link>
                <p>
                  first commit: {post.frontmatter.firstCommit},
                  last commit: {post.frontmatter.lastCommit}
                </p>
                <a href={post.frontmatter.projectUrl}>Check it out here!</a>
                <img src='placeholder@nono.com' alt={'image of ' + post.frontmatter.title} />
                <p>{`Tools I used: ${post.frontmatter.tools.join(' ')}`}</p>
              </div>
            )
          })
      }
    </div>
  )
}

export default ProjectPage

export const query = graphql`
  query ProjectsQuery {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "project" } }},
      sort: { order: DESC, fields: [frontmatter___firstCommit] }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            path
            type
            title
            firstCommit
            lastCommit
            projectUrl
            imgUrl
            tools
          }
        }
      }
    }
  }
`
