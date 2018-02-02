import React from 'react'

const IndexPage = ({data}) => (
  <div
    className='page-container'
    style={{
      marginTop: '1rem',
      padding: '5rem 2rem 5rem 2rem',
      width: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}
  >
    <h1
      style={{
        fontSize: '2rem',
        borderBottom: '2px groove black'
      }}
    >
      Welcome to my site!
      </h1>
    <article
      style={{
        padding: '20px',
        maxWidth: '540px',
        fontWeight: 'bold',
        textAlign: 'center'
      }}
    >
      <p>All my life I have been cursed with a constant urge to <em>make things</em>.</p>
      <p>I tried to ignore it, but I failed miserably.</p>
      <p>I've built this site as a place to put all the things I make along the way.</p>
      <p>Feel free to take a look, and let me know what you think!</p>
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
