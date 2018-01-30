import React from 'react'

const IndexPage = ({data}) => (
  <div
    className='page-container'
    style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}
  >
    <h1
      style={{
        fontSize: '2rem',
        margin: '2rem'
      }}
    >
      Welcome to my site!
      </h1>
    <article
      style={{
        maxWidth: '540px',
        fontWeight: 'bold',
        textAlign: 'justify'
      }}
    >
      I have been cursed with a constant
      urge to <em>make things</em>. Despite my best efforts I haven't
      managed to make it stop, so I've built this site as a place to put all
      the things I make along the way. Feel free to take a look and let me
      know what you think!
    </article>
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
