import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import React from 'react'

const TagsPage = ({ data: { allMarkdownRemark: { group } } }) => (
  <div
    className='tags-container'
    css={{
      padding: '3rem 1rem 3rem 1rem',
      width: '100%',
      maxWidth: '800px'
    }}
  >
    <Helmet title={`TTID - Tags`} />
    <div
      css={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <h1
        css={{
          textAlign: 'center',
          borderBottom: '2px groove black'
        }}
      >
        Tags
      </h1>
      <ul
        css={{
          alignSelf: 'center'
        }}
      >
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${tag.fieldValue}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default TagsPage

export const query = graphql`
 query TagsQuery {
   allMarkdownRemark(
     limit: 2000
   ) {
     group(field: frontmatter___tags) {
       fieldValue
       totalCount
     }
   }
 }
`
