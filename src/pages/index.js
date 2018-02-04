import React from 'react'

const IndexPage = () => (
  <div
    className='page-container'
    css={{
      padding: '5rem 2rem 3rem 2rem',
      maxWidth: '60vw',
      display: 'flex',
      justifyContent: 'space-between',
      textAlign: 'center'
    }}
  >
    <article
      css={{
        maxWidth: '540px',
        fontWeight: 'bold'
      }}
    >
      <p>
        I've built this site as a place to put all the things I make and write.
        Take a look and let me know what you think!
      </p>
    </article>
  </div>
  )

export default IndexPage
