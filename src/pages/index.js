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
      Welcome to my site!
      </h1>
    <article
      css={{
        padding: '20px',
        maxWidth: '540px',
        fontWeight: 'bold'
      }}
    >
      <p>All my life I have been cursed with a constant urge to <em>make things</em>.</p>
      <p>I tried to ignore it, but failed miserably.</p>
      <p>I've built this site as a place to put all the things I make along the way.</p>
      <p>Feel free to take a look, and let me know what you think!</p>
    </article>
  </div>
  )

export default IndexPage
