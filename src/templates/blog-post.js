import React from 'react'
import Helmet from 'react-helmet'

export default function Template ({ data }) {
  const { markdownRemark: post } = data
  return (
    <div
      className='blog-post-container'
      css={{
        padding: '3rem 2rem 3rem 2rem',
        maxWidth: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}
      >
      <Helmet title={`TTID - ${post.frontmatter.title}`} />
      <div className='blog-post'>
        <h1
          css={{
            fontSize: '2rem',
            borderBottom: '2px groove black'
          }}
        >{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <div
          className='blog-post-content'
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMM DD, YYYY")
        path
        title
      }
    }
  }
`
