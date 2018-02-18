import Link from 'gatsby-link'
import React from 'react'

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div
      className='blog-posts'
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
          borderBottom: '2px groove black',
          marginBottom: '2rem',

          '@media(max-width: 400px)': {
            marginBottom: '9px'
          }
        }}
      >
        Blog
      </h1>
      <div
        className='sidebar'
        css={{
          height: '64px',
          width: '10vw',
          position: 'absolute',
          right: '0px',
          top: '64px',
          backgroundColor: '#ddddddbb',

          '@media(max-width: 400px)': {
            height: 'auto',
            width: 'auto',
            position: 'relative',
            left: 'auto',
            top: 'auto',
            marginBottom: '2rem'

          }
        }}
      >
        <Link to='/tags/'>
          Tags
        </Link>
      </div>
      {
        posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div
                className='blog-post-preview'
                key={post.id}
                css={{
                  borderBottom: '2px groove black',
                  marginBottom: '2rem'
                }}
              >
                <h2>
                  <Link to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </Link>
                </h2>
                <p>
                  Published: {post.frontmatter.date}
                </p>
                <div
                  className='tag-container'
                  css={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                  }}
                >
                  <p
                    css={{
                      paddingRight: '0.5rem',
                      margin: 'auto'
                    }}
                  >
                    Tags:
                  </p>
                  {post.frontmatter.tags.map(tag => {
                    return (
                      <Link
                        to={`/tags/${tag}/`}
                        css={{
                          paddingRight: '0.5rem'
                        }}
                      >
                        {tag}
                      </Link>
                    )
                  })
                  }
                </div>
                <p
                  css={{
                    textAlign: 'start',
                    marginTop: '5px'
                  }}
                >
                  {post.excerpt}
                </p>
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
