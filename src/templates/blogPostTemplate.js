import React from 'react'
import Helmet from 'react-helmet'

export const BlogPostTemplate = ({ postData }) => {
  return (
    <div className='blog-post'
      css={{
        padding: '3rem 1rem 3rem 1rem',
        width: '100%',
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
      }}
    >
      <Helmet title={`TTID - ${postData.frontmatter.title}`} />
      <h1
        css={{
          fontSize: '2rem',
          borderBottom: '2px groove black'
        }}
      >
        {postData.frontmatter.title}
      </h1>
      <p>
        {postData.frontmatter.date}
      </p>
      <p
        css={{
          fontStyle: 'italic'
        }}
      >
        {`tags: ${postData.frontmatter.tags.join(', ')}`}
      </p>
      <div
        className='blog-post-content'
        css={{
          width: '100%',
          textAlign: 'start'
        }}
        dangerouslySetInnerHTML={{ __html: postData.html }}
        />
    </div>
  )
}
export default BlogPostTemplate
