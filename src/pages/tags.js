import ContentContainer from '../components/ContentContainer'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import React from 'react'

const TagsPage = ({ data: { allMarkdownRemark: { group } } }) => (
  <ContentContainer className='all-tags'>
    <Helmet title={`TTID - Tags`} />
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
      }}
    >
      <h1
        css={{
          borderBottom: '2px groove black'
        }}
      >
        Tags
      </h1>
      <ul
        css={{
          alignSelf: 'center',
          textAlign: 'start'
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
  </ContentContainer>
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
