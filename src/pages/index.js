import React from 'react'

const IndexPage = ({data}) => (
  <div
    style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
      // put the wood background image in here
    }}
  >
    <h1
      style={{
        fontSize: '2rem'
      }}
    >
    Welcome to my site!
    </h1>
    <p>
      I put this together to have a place to put all the stuff I do.
      Please take a look, and if you find anything interesting let me
      know!
    </p>
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
