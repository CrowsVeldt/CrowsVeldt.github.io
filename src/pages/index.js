import React from 'react'

const IndexPage = ({data}) => (
  <div>
    <h1>Welcome to {data.site.siteMetadata.title}</h1>
  </div>
  )

export default IndexPage

export const frontPageQuery = graphql`
  query FrontPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
