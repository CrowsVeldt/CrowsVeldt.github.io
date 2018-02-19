import ContentContainer from '../components/Page/ContentContainer'
import Link from 'gatsby-link'
import React from 'react'

const ProjectPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <ContentContainer className='project-page'>
      <h1
        css={{
          borderBottom: '2px groove black'
        }}
      >
        Projects
      </h1>
      {
        posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div
                key={post.id}
                css={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderBottom: '2px groove black'
                }}
              >
                <h2>
                  <Link to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </Link>
                </h2>
                <p>
                  first commit: {post.frontmatter.firstCommit},
                  last commit: {post.frontmatter.lastCommit}
                </p>
                <a href={post.frontmatter.projectUrl}>
                  {/* <img
                    src=''
                    alt={'image of ' + post.frontmatter.title}
                    css={{
                      alignSelf: 'center'
                    }}
                  /> */}
                </a>
                <p>{`Tools I used: ${post.frontmatter.tools.join(', ')}`}</p>
              </div>
            )
          })
      }
    </ContentContainer>
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
            firstCommit
            lastCommit
            path
            projectUrl
            title
            tools
            type
          }
        }
      }
    }
  }
`
