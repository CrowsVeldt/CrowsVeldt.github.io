import Link from 'gatsby-link'
import React from 'react'

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div
      className='blog-posts'
      css={{
        padding: '3rem 2rem 3rem 2rem',
        width: '100%',
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <h1
        css={{
          borderBottom: '2px groove black',
          textAlign: 'center'
        }}
      >
        Things I Wrote
      </h1>
      {
        posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div
                className='blog-post-preview'
                key={post.id}
                css={{
                  borderBottom: '2px groove black'
                }}
              >
                <h2
                  css={{
                    textAlign: 'center'
                  }}
                >
                  <Link
                    css={{
                      color: 'hsla(0, 0%, 0%, .8) ',
                      textDecoration: 'none',
                      ':visited': {
                        color: 'purple'
                      },
                      ':hover': {
                        textDecoration: 'underline'
                      }
                    }}
                    to={post.frontmatter.path}
                  >
                    {post.frontmatter.title}
                  </Link>
                </h2>
                <p
                  css={{
                    textAlign: 'center'
                  }}
                >
                  {post.frontmatter.date}
                </p>
                <p
                  css={{
                    fontStyle: 'italic',
                    textAlign: 'center'
                  }}
                >
                  {`tags: ${post.frontmatter.tags.join(', ')}`}
                </p>
                <p>{post.excerpt}</p>
              </div>)
          })
      }
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: {frontmatter: { type: { eq: "post" } }},
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
          }
        }
      }
    }
  }
`
