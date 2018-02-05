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
      Who I Am
    </h1>
    <article
      css={{
        margin: '.5rem',
        padding: '10px'
      }}
    >
      <p>
        I'm a guy with an incessent urge to tell stories and make things.
      </p>
    </article>
    <article
      css={{
        margin: '.5rem',
        padding: '10px'
      }}
    >
      <p>
        I care more than is good for me about equality, justice,
        the environment, and various other enormous issues that I'll
        almost certainly never be able to have a significant impact on.
      </p>
    </article>
  </div>
)

export default AboutPage
