import ContentContainer from '../components/ContentContainer'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import React from 'react'

export const BlogPostTemplate = ({ data, context }) => {
  const {prev, next} = context

  const previousPost = prev.frontmatter ? prev.frontmatter.path : null
  const nextPost = next.frontmatter ? next.frontmatter.path : null

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
      <div
        className='prev-and-next-links'
        css={{
          width: '150px',
          alignSelf: 'center',
          display: 'flex',
          justifyContent: 'space-between'

        }}
      >
        {
          previousPost
          ? <Link to={previousPost}>{prev.frontmatter.title}</Link>
          : null
        }
        {
          nextPost
          ? <Link to={nextPost}>{next.frontmatter.title}</Link>
          : null
        }
      </div>
    </ContentContainer>
  )
}
export default BlogPostTemplate
