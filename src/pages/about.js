import React from 'react'

const AboutPage = () => (
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
      A Little About Me
    </h1>
    <article
      css={{
        margin: '.5rem',
        padding: '10px'
      }}
    >
      <p>paragraph</p>
    </article>
    <article
      css={{
        margin: '.5rem',
        padding: '10px'
      }}
    >
      <p>paragraph</p>
    </article>
    <article
      css={{
        margin: '.5rem',
        padding: '10px'
      }}
    >
      <p>paragraph</p>
    </article>
  </div>
)

export default AboutPage
