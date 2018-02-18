import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import React from 'react'

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
        Published: {postData.frontmatter.date}
      </p>
      <div
        className='tag-container'
        css={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'center',
          marginBottom: '1rem'
        }}
      >
        <p
          css={{
            paddingRight: '0.5rem',
            marginTop: 'auto',
            marginBottom: 'auto'
          }}
        >
          Tags:
        </p>
        <span
          css={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
            padding: 0
          }}
        >
          {postData.frontmatter.tags.map(tag => {
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
          })}
        </span>
      </div>
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
