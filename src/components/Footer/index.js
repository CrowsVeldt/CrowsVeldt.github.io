import React from 'react'
import Link from 'gatsby-link'

const Footer = () => (
  <div
    style={{
      background: 'black'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem'
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to='/'
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
        >
          Zechy's Site
        </Link>
      </h1>
    </div>
  </div>
)

export default Footer

export const query = graphql`
  query FooterQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
