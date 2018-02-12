import React from 'react'
import Helmet from 'react-helmet'

export const BlogPostTemplate = ({ postData }) => {
  return (
    <div className='blog-post'
      css={{
        padding: '3rem 2rem 3rem 2rem',
        width: '100%',
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Helmet title={`TTID - ${postData.frontmatter.title}`} />
      <h1
        css={{
          fontSize: '2rem',
          borderBottom: '2px groove black',
          textAlign: 'center'
        }}
      >
        {postData.frontmatter.title}
      </h1>
      <p
        css={{
          textAlign: 'center'
        }}
      >
        {postData.frontmatter.date}
      </p>
      <p
        css={{
          fontStyle: 'italic',
          textAlign: 'center'
        }}
      >
        {`tags: ${postData.frontmatter.tags.join(', ')}`}
      </p>
      <div
        className='blog-post-content'
        css={{
          width: '100%'
        }}
        dangerouslySetInnerHTML={{ __html: postData.html }}
        />
    </div>
  )
}
export default BlogPostTemplate
