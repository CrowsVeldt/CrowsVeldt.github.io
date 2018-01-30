import React from 'react'

const IndexPage = ({data}) => (
  <div
    style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}
  >
    <h1
      style={{
        fontSize: '2rem'
      }}
    >Welcome to {data.site.siteMetadata.title}</h1>
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
