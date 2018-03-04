import ContentContainer from '../components/Page/ContentContainer'
import PageNavLinks from '../components/Page/PageNavLinks'
import Link from 'gatsby-link'
import React from 'react'
import Helmet from 'react-helmet'

export default function Template ({ data, pathContext }) {
  const { markdownRemark: post } = data
  const nextPage = pathContext.prev.frontmatter
  const previousPage = pathContext.next.frontmatter

  return (
    <ContentContainer className='blog-post'>
      <Helmet title={`TTID - ${post.frontmatter.title}`} />
      <h1
        css={{
          fontSize: '2rem',
          borderBottom: '2px groove black'
        }}
      >
        {post.frontmatter.title}
      </h1>
      <p>
        Published: {post.frontmatter.date}
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
            flexWrap: 'wrap'
          }}
        >
          {post.frontmatter.tags.map((tag, index) => {
            return (
              <Link
                to={`/tags/${tag}/`}
                key={index}
                css={{
                  marginRight: '0.2rem',
                  marginLeft: '0.2rem'
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
        dangerouslySetInnerHTML={{ __html: post.html }}
        />
      <PageNavLinks previous={previousPage} next={nextPage} />
    </ContentContainer>
  )
}

export const query = graphql`
  query PageByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMM DD, YYYY")
        path
        tags
        title
      }
    }
  }
`
