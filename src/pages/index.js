import Link from 'gatsby-link'
import React from 'react'

const IndexPage = () => (
  <div
    className='page-container'
    css={{
      padding: '3rem 2rem 3rem 2rem',
      maxWidth: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }}
  >
    <h1
      css={{
        fontSize: '2rem',
        borderBottom: '2px groove black'
      }}
    >
      This Thing I Did
      </h1>
    <article
      css={{
        maxWidth: '540px',
        fontWeight: 'bold'
      }}
    >
      <p>I've built this site as a place to put all the things I make and write.</p>
      <p>Take a look and let me know what you think!</p>
    </article>
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start'
      }}
    >
      <Link to='/about'>A Little About Me</Link>
      <Link to='/projects'>Things I Built</Link>
      <Link to='/blog'>Things I Wrote</Link>
    </div>
  </div>
  )

export default IndexPage
