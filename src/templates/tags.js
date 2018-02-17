import Link from 'gatsby-link'
import React from 'react'

const tags = ({ pathContext, data }) => {
  const { tag } = pathContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tag}"`

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        padding: '3rem 1rem 3rem 1rem'
      }}
    >
      <h1
        css={{
          fontSize: '1.8rem',
          borderBottom: '2px groove black'
        }}
      >
        {tagHeader}
      </h1>
      <ul
        css={{
          alignSelf: 'center'
        }}
      >
        {edges.map(({ node }) => {
          const { path, title } = node.frontmatter
          return (
            <li key={path}>
              <Link to={path}>{title}</Link>
            </li>
          )
        })}
      </ul>
      <Link to='/tags'>All tags</Link>
    </div>
  )
}

export default tags

export const query = graphql`
  query tagPage($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`
