import React from 'react'
import Helmet from 'react-helmet'

export const BlogPostTemplate = ({ postData }) => {
  return (
    <div
      className='blog-post-container'
      css={{
        padding: '3rem 2rem 3rem 2rem',
        maxWidth: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
        >
      <Helmet title={`TTID - ${postData.frontmatter.title}`} />
      <div className='blog-post'>
        <h1
          css={{
            fontSize: '2rem',
            borderBottom: '2px groove black',
            textAlign: 'center'
          }}
        >
          {postData.frontmatter.title}
        </h1>
        <p>{postData.frontmatter.date}</p>
        <div
          className='blog-post-content'
          dangerouslySetInnerHTML={{ __html: postData.html }}
          />
      </div>
    </div>
  )
}
export default BlogPostTemplate
