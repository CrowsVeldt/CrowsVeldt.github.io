import ContentContainer from '../components/Page/ContentContainer'
import PageNavLinks from '../components/Page/PageNavLinks'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import React from 'react'

export const BlogPostTemplate = ({ data, context }) => {
  // Given the order of posts in context prev becomes next and vice versa
  const nextPage = context.prev.frontmatter
  const previousPage = context.next.frontmatter

  return (
    <ContentContainer className='blog-post'>
      <Helmet title={`TTID - ${data.frontmatter.title}`} />
      <h1
        css={{
          fontSize: '2rem',
          borderBottom: '2px groove black'
        }}
      >
        {data.frontmatter.title}
      </h1>
      <p>
        Published: {data.frontmatter.date}
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
          {data.frontmatter.tags.map((tag, index) => {
            return (
              <Link
                to={`/tags/${tag}/`}
                key={index}
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
        dangerouslySetInnerHTML={{ __html: data.html }}
        />
      <PageNavLinks previous={previousPage} next={nextPage} />
    </ContentContainer>
  )
}
export default BlogPostTemplate
