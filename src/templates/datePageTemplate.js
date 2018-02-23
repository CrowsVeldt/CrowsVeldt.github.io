import ContentContainer from '../components/Page/ContentContainer'
import React from 'react'
import Link from 'gatsby-link'

const datePageTemplate = ({ pathContext, data }) => {
  const { date } = pathContext
  const { edges, totalCount } = data.allMarkdownRemark
  const dateHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} in ${date}`

  return (
    <ContentContainer className='date-page' />
  )
}

export default datePageTemplate

export const query = graphql`
  query DatePage  {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { type: { eq: "post" } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            date
            title
            path
          }
        }
      }
    }
  }
`
